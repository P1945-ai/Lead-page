import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mic, MicOff, ArrowRight, AlertCircle } from 'lucide-react';
import { ConversationProvider, useConversation } from '@elevenlabs/react';

const AGENT_ID = import.meta.env.VITE_ELEVENLABS_AGENT_ID;
const SESSION_LIMIT_MS = 60_000;            // hard 60s cutoff
const CONNECT_TIMEOUT_MS = 15_000;          // give up if never connects
const RATE_LIMIT_MS = 24 * 60 * 60 * 1000;  // 1 try per browser per 24h
const LS_KEY = 'ella_voice_last_session';

/**
 * Client-side quota gate. Tries the backend endpoint first
 * (/api/voice/check-quota), falls back to localStorage when the backend
 * isn't available (MVP behavior per brief). Backend can only further
 * restrict, never loosen the local gate.
 */
async function checkQuota() {
  const last = Number(localStorage.getItem(LS_KEY) || 0);
  const localAllowed = !last || Date.now() - last >= RATE_LIMIT_MS;
  const localRetryAfter = last ? last + RATE_LIMIT_MS : 0;

  try {
    const res = await fetch('/api/voice/check-quota', { headers: { 'Content-Type': 'application/json' } });
    if (res.ok) {
      const data = await res.json();
      return { allowed: localAllowed && data.allowed !== false, retryAfter: data.retry_after || localRetryAfter };
    }
  } catch { /* backend not ready — localStorage authority */ }
  return { allowed: localAllowed, retryAfter: localRetryAfter };
}

function formatRetry(ts) {
  const ms = ts - Date.now();
  if (ms <= 0) return 'now';
  const hrs = Math.ceil(ms / (60 * 60 * 1000));
  return hrs <= 1 ? 'in about an hour' : `in ~${hrs} hours`;
}

function VoiceDemoInner() {
  // idle | checking | connecting | active | ended | rate_limited | denied | error | unconfigured
  const [state, setState] = useState(AGENT_ID ? 'idle' : 'unconfigured');
  const [secondsLeft, setSecondsLeft] = useState(60);
  const [retryAfter, setRetryAfter] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');

  const cutoffRef = useRef(null);
  const tickRef = useRef(null);
  const connectRef = useRef(null);
  const endRef = useRef(() => {});

  const clearTimers = () => {
    [cutoffRef, tickRef, connectRef].forEach((r) => {
      if (r.current) { clearTimeout(r.current); clearInterval(r.current); r.current = null; }
    });
  };

  const markUsed = () => localStorage.setItem(LS_KEY, String(Date.now()));

  const forceEnd = (next = 'ended') => {
    clearTimers();
    try { endRef.current?.(); } catch { /* noop */ }
    markUsed();
    setState(next);
  };

  const beginTimers = () => {
    if (connectRef.current) { clearTimeout(connectRef.current); connectRef.current = null; }
    setSecondsLeft(60);
    const startedAt = Date.now();
    tickRef.current = setInterval(() => {
      setSecondsLeft(Math.max(0, 60 - Math.floor((Date.now() - startedAt) / 1000)));
    }, 250);
    cutoffRef.current = setTimeout(() => forceEnd('ended'), SESSION_LIMIT_MS);
  };

  const conversation = useConversation({
    onConnect: () => { setState('active'); beginTimers(); },
    onDisconnect: () => {
      clearTimers();
      setState((s) => (s === 'active' || s === 'connecting' ? 'ended' : s));
    },
    onError: (err) => {
      clearTimers();
      setErrorMsg(typeof err === 'string' ? err : (err?.message || 'Connection error'));
      setState('error');
    },
  });
  endRef.current = conversation.endSession;

  // cleanup on unmount
  useEffect(() => () => { clearTimers(); try { endRef.current?.(); } catch { /* noop */ } }, []);

  const startSession = async () => {
    if (state === 'connecting' || state === 'active' || state === 'checking') return;
    setErrorMsg('');
    setState('checking');

    // 1. Quota gate
    const { allowed, retryAfter: ra } = await checkQuota();
    if (!allowed) { setRetryAfter(ra); setState('rate_limited'); return; }

    // 2. Microphone permission
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach((t) => t.stop()); // release; SDK reacquires
    } catch { setState('denied'); return; }

    // 3. Start conversation (async via callbacks)
    setState('connecting');
    try {
      conversation.startSession({ agentId: AGENT_ID });
      // bail out if connection never establishes
      connectRef.current = setTimeout(() => {
        setErrorMsg('Connection timed out. Please try again.');
        forceEnd('error');
      }, CONNECT_TIMEOUT_MS);
    } catch (err) {
      setErrorMsg(err?.message || 'Could not start the session.');
      setState('error');
    }
  };

  const onButtonClick = () => {
    if (state === 'active') forceEnd('ended');
    else if (['idle', 'ended', 'error', 'denied'].includes(state)) startSession();
  };

  const bookCall = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  const isActive = state === 'active';
  const isBusy = state === 'connecting' || state === 'checking';
  const isDisabled = state === 'rate_limited' || state === 'unconfigured';

  let buttonBg = 'var(--accent)';
  let buttonLabel = 'TAP TO TALK';
  if (isActive) { buttonBg = '#DC2626'; buttonLabel = `${secondsLeft}s`; }
  else if (isBusy) { buttonBg = 'var(--accent-hover)'; buttonLabel = 'CONNECTING'; }
  else if (state === 'ended') { buttonBg = '#9CA3AF'; buttonLabel = 'ENDED'; }
  else if (state === 'rate_limited') { buttonBg = '#9CA3AF'; buttonLabel = 'COME BACK'; }
  else if (state === 'unconfigured') { buttonBg = '#9CA3AF'; buttonLabel = 'DEMO SOON'; }

  const showRings = state === 'idle' || state === 'ended';

  return (
    <section id="voice-demo" className="relative py-20 sm:py-30 px-6 lg:px-8 overflow-hidden" style={{ background: 'var(--surface-warm)' }}>
      <div aria-hidden="true" className="gradient-warm-glow absolute pointer-events-none" style={{ width: '700px', height: '500px', top: '-10%', left: '50%', transform: 'translateX(-50%)', opacity: 0.6 }} />

      <div className="relative z-10 max-w-[720px] mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }}>
          <span className="section-label">TRY ELLA · LIVE VOICE DEMO</span>
          <h2 style={{ fontFamily: '"Geist Variable", "Inter", sans-serif', fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.1, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '14px' }}>
            Hear Ella for yourself.
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)', marginBottom: '44px' }}>
            60 seconds. Real conversation. No catch.
          </p>
        </motion.div>

        <div className="flex flex-col items-center">
          <div style={{ position: 'relative', width: '160px', height: '160px' }}>
            {showRings && (
              <>
                <span className="pulse-ring" style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'rgba(255,79,0,0.35)' }} />
                <span className="pulse-ring" style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'rgba(255,79,0,0.25)', animationDelay: '1s' }} />
              </>
            )}

            <button
              onClick={onButtonClick}
              disabled={isDisabled || isBusy}
              aria-label={isActive ? 'End conversation with Ella' : 'Start talking to Ella'}
              className="voice-orb"
              style={{
                position: 'relative', width: '160px', height: '160px', borderRadius: '50%',
                background: buttonBg, border: 'none', color: '#fff',
                cursor: isDisabled || isBusy ? 'not-allowed' : 'pointer',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px',
                boxShadow: isActive ? '0 0 50px rgba(220,38,38,0.4)' : '0 0 50px rgba(255,79,0,0.3)',
                transition: 'background 250ms, box-shadow 250ms, transform 200ms',
              }}
              onMouseEnter={(e) => { if (!isDisabled && !isBusy) e.currentTarget.style.transform = 'scale(1.03)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
            >
              {isActive ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', height: '32px' }}>
                  {[0, 1, 2, 3, 4].map((i) => (
                    <span key={i} className="wave-bar" style={{ width: '5px', height: '32px', borderRadius: '3px', background: '#fff', animationDelay: `${i * 0.12}s` }} />
                  ))}
                </div>
              ) : state === 'denied' ? <MicOff size={34} /> : <Mic size={34} />}
              <span style={{ fontFamily: '"Geist Mono Variable", monospace', fontSize: '13px', fontWeight: 600, letterSpacing: '0.08em' }}>
                {buttonLabel}
              </span>
            </button>
          </div>

          <div style={{ minHeight: '28px', marginTop: '24px' }}>
            {state === 'denied' && (
              <p style={{ fontSize: '14px', color: '#DC2626', display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'center' }}>
                <AlertCircle size={14} /> Microphone access denied. Enable it in your browser to talk to Ella.
              </p>
            )}
            {state === 'error' && (
              <p style={{ fontSize: '14px', color: '#DC2626', display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'center' }}>
                <AlertCircle size={14} /> {errorMsg || 'Something went wrong. Try again.'}
              </p>
            )}
            {state === 'rate_limited' && (
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                You've used your free try. Come back {formatRetry(retryAfter)} — or just book a call.
              </p>
            )}
            {state === 'unconfigured' && (
              <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                Voice demo is being configured. Book a call to talk with us directly.
              </p>
            )}
            {state === 'active' && (
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                {conversation.isSpeaking ? 'Ella is speaking…' : 'Listening… say hello!'}
              </p>
            )}
          </div>

          {(state === 'ended' || state === 'rate_limited') && (
            <motion.button initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} onClick={bookCall} className="btn-primary" style={{ marginTop: '8px' }}>
              Liked what you heard? Book a call
              <ArrowRight size={16} />
            </motion.button>
          )}

          <p style={{ fontFamily: '"Geist Mono Variable", monospace', fontSize: '12px', color: 'var(--text-muted)', marginTop: '28px', letterSpacing: '0.03em' }}>
            Powered by ElevenLabs · Limited to 60s per session · 1 free try per day
          </p>
        </div>
      </div>
    </section>
  );
}

export default function EllaVoiceDemo() {
  return (
    <ConversationProvider>
      <VoiceDemoInner />
    </ConversationProvider>
  );
}
