import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Play, RotateCcw, ArrowRight, CheckCircle2, AlertTriangle } from 'lucide-react';

/**
 * The Silent Loss Detector — a free, no-signup diagnostic that replays the
 * moment a customer finds a trades business and picks a faster competitor.
 * Rendered as a dark "terminal" card for dramatic contrast on the light page.
 *
 * Benchmark data is hardcoded per trade (industry averages, not a live API).
 */
const INDUSTRIES = [
  { key: 'electrician', emoji: '⚡', name: 'Electrician',   jobValue: 420,  missedPerMonth: 9  },
  { key: 'painter',     emoji: '🎨', name: 'Painter',       jobValue: 1200, missedPerMonth: 4  },
  { key: 'plumber',     emoji: '🔧', name: 'Plumber',       jobValue: 380,  missedPerMonth: 11 },
  { key: 'hvac',        emoji: '🌬️', name: 'HVAC',          jobValue: 650,  missedPerMonth: 7  },
  { key: 'roofer',      emoji: '🏠', name: 'Roofer',        jobValue: 4500, missedPerMonth: 2  },
  { key: 'handyman',    emoji: '🛠️', name: 'Handyman',      jobValue: 240,  missedPerMonth: 12 },
  { key: 'detailer',    emoji: '🚗', name: 'Auto Detailer', jobValue: 180,  missedPerMonth: 14 },
  { key: 'landscaper',  emoji: '🌲', name: 'Landscaper',    jobValue: 320,  missedPerMonth: 8  },
];

// Timeline beats for the simulation. `at` is the simulated clock in seconds.
const BEATS = [
  { at: 0,   status: 'neutral', text: 'Found your business on Google. Tapped “Call”.' },
  { at: 22,  status: 'neutral', text: 'Rang 6 times. No answer. Left no message.' },
  { at: 48,  status: 'warning', text: '“I’ll just try the next one on the list.”' },
  { at: 95,  status: 'warning', text: 'Competitor picked up on the second ring.' },
  { at: 150, status: 'lost',    text: '“They can come Thursday. Let’s just book it.”' },
  { at: 228, status: 'lost',    text: 'Booked with someone else. You never knew they called.' },
];

const SIM_END = 228; // ~3:48
const fmt = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
const money = (n) => '$' + Math.round(n).toLocaleString('en-CA');

const statusColor = { neutral: '#3FB950', warning: '#D29922', lost: '#FF4F00' };
const statusLabel = { neutral: 'CUSTOMER ENGAGED', warning: 'PATIENCE RUNNING OUT', lost: 'CUSTOMER LOST' };

export default function SilentLossDetector() {
  const [phase, setPhase] = useState('intro'); // intro | select | running | result
  const [industry, setIndustry] = useState(null);
  const [simTime, setSimTime] = useState(0);

  // email capture
  const [email, setEmail] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [emailErr, setEmailErr] = useState('');

  const rafRef = useRef(null);

  const reset = () => {
    setPhase('intro'); setIndustry(null); setSimTime(0);
    setEmail(''); setSent(false); setSending(false); setEmailErr('');
  };

  const runSimulation = (ind) => {
    setIndustry(ind);
    setSimTime(0);
    setPhase('running');
  };

  // Drive the simulated clock while running (compressed to ~5.5s real time).
  useEffect(() => {
    if (phase !== 'running') return;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { setSimTime(SIM_END); const t = setTimeout(() => setPhase('result'), 600); return () => clearTimeout(t); }

    const startedAt = performance.now();
    const DURATION = 5500;
    const tick = (now) => {
      const p = Math.min(1, (now - startedAt) / DURATION);
      setSimTime(p * SIM_END);
      if (p < 1) { rafRef.current = requestAnimationFrame(tick); }
      else { rafRef.current = setTimeout(() => setPhase('result'), 700); }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(rafRef.current); clearTimeout(rafRef.current); };
  }, [phase]);

  const currentBeat = [...BEATS].reverse().find((b) => simTime >= b.at) || BEATS[0];
  const currentStatus = currentBeat.status;

  const lossPerIncident = industry?.jobValue || 0;
  const monthlyLoss = industry ? industry.jobValue * industry.missedPerMonth : 0;
  const annualLoss = monthlyLoss * 12;

  const submitEmail = async (e) => {
    e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { setEmailErr('Enter a valid email.'); return; }
    setEmailErr('');
    setSending(true);
    // Submits to the existing contact endpoint with attribution (mock in MVP).
    const payload = { email, source: 'silent_loss_detector', industry: industry?.key, estimated_annual_loss: annualLoss };
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }).catch(() => {});
    } finally {
      await new Promise((r) => setTimeout(r, 900));
      setSending(false);
      setSent(true);
    }
  };

  return (
    <section
      id="silent-loss-detector"
      className="relative py-20 sm:py-30 px-6 lg:px-8 section-top-divider"
      style={{ background: 'var(--bg)' }}
    >
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <span className="section-label">FREE TOOL · NO SIGNUP</span>
          <h2 className="section-title">The Silent Loss Detector</h2>
          <p className="section-subtitle">
            Every day, customers find your business and choose someone else in under
            4 minutes. This tool replays that exact moment.
          </p>
        </motion.div>

        {/* Dark terminal card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto"
          style={{
            maxWidth: '720px',
            background: '#0D1117',
            border: '1px solid #21262D',
            borderRadius: '16px',
            boxShadow: '0 20px 60px rgba(13,17,23,0.35)',
            overflow: 'hidden',
          }}
        >
          {/* Terminal title bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 18px', borderBottom: '1px solid #21262D', background: '#161B22' }}>
            <span style={{ display: 'flex', gap: '6px' }}>
              <Dot c="#FF5F56" /><Dot c="#FFBD2E" /><Dot c="#27C93F" />
            </span>
            <span style={{ fontFamily: '"Geist Mono Variable", monospace', fontSize: '12px', color: '#8B949E', letterSpacing: '0.04em', display: 'flex', alignItems: 'center', gap: '7px' }}>
              <Activity size={13} style={{ color: 'var(--accent)' }} />
              silent-loss-detector
            </span>
          </div>

          <div style={{ padding: '28px 22px 30px', minHeight: '340px' }}>
            <AnimatePresence mode="wait">

              {/* ── INTRO ── */}
              {phase === 'intro' && (
                <Pane key="intro">
                  <p style={mono('#8B949E', 12)}>$ run silent-loss-detector --replay</p>
                  <h3 style={termHead}>What is your slow response actually costing you?</h3>
                  <p style={termBody}>
                    Pick your trade and we'll replay the 4-minute window where a real
                    customer decides between you and the next business on the list — then
                    show you the revenue walking out the door every month.
                  </p>
                  <p style={{ ...mono('#6E7681', 12), marginTop: '14px' }}>
                    No signup. Industry-average benchmarks. ~6 seconds.
                  </p>
                  <button onClick={() => setPhase('select')} style={termBtn} className="sld-btn">
                    <Play size={15} /> Run the simulation
                  </button>
                </Pane>
              )}

              {/* ── INDUSTRY SELECT ── */}
              {phase === 'select' && (
                <Pane key="select">
                  <p style={mono('#8B949E', 12)}>$ select --industry</p>
                  <h3 style={termHead}>Which trade are you in?</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3" style={{ marginTop: '20px' }}>
                    {INDUSTRIES.map((ind) => (
                      <button
                        key={ind.key}
                        onClick={() => runSimulation(ind)}
                        className="sld-tile"
                        style={{
                          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
                          padding: '18px 10px', borderRadius: '12px',
                          background: '#161B22', border: '1px solid #21262D',
                          color: '#E6EDF3', cursor: 'pointer', transition: 'border-color 200ms, transform 200ms',
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#21262D'; e.currentTarget.style.transform = 'translateY(0)'; }}
                      >
                        <span style={{ fontSize: '26px', lineHeight: 1 }}>{ind.emoji}</span>
                        <span style={{ fontSize: '13px', fontWeight: 600, textAlign: 'center' }}>{ind.name}</span>
                      </button>
                    ))}
                  </div>
                </Pane>
              )}

              {/* ── RUNNING ── */}
              {phase === 'running' && (
                <Pane key="running">
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={mono('#8B949E', 12)}>{industry.emoji} {industry.name} · customer decision window</span>
                    <span style={{ ...mono(statusColor[currentStatus], 28), fontWeight: 700 }}>{fmt(simTime)}</span>
                  </div>

                  {/* status bar */}
                  <div style={{ height: '8px', borderRadius: '999px', background: '#21262D', overflow: 'hidden', margin: '10px 0 6px' }}>
                    <div style={{
                      height: '100%', width: `${(simTime / SIM_END) * 100}%`,
                      background: statusColor[currentStatus], transition: 'background 400ms, width 120ms linear',
                    }} />
                  </div>
                  <p style={{ ...mono(statusColor[currentStatus], 12), fontWeight: 700, letterSpacing: '0.1em', marginBottom: '18px' }}>
                    {statusLabel[currentStatus]}
                  </p>

                  {/* thought bubbles */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {BEATS.filter((b) => simTime >= b.at).map((b) => (
                      <motion.div
                        key={b.at}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          display: 'flex', gap: '10px', alignItems: 'flex-start',
                          background: '#161B22', border: '1px solid #21262D',
                          borderLeft: `3px solid ${statusColor[b.status]}`,
                          borderRadius: '8px', padding: '10px 12px',
                        }}
                      >
                        <span style={mono('#6E7681', 11)}>{fmt(b.at)}</span>
                        <span style={{ fontSize: '13px', color: '#E6EDF3', lineHeight: 1.4 }}>{b.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </Pane>
              )}

              {/* ── RESULT ── */}
              {phase === 'result' && (
                <Pane key="result">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <AlertTriangle size={16} style={{ color: 'var(--accent)' }} />
                    <span style={{ ...mono('var(--accent)', 12), fontWeight: 700, letterSpacing: '0.1em' }}>SIMULATION COMPLETE</span>
                  </div>
                  <h3 style={termHead}>Here's what slow response costs a {industry.name.toLowerCase()}.</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3" style={{ margin: '20px 0 10px' }}>
                    <Stat label="PER MISSED JOB" value={money(lossPerIncident)} />
                    <Stat label="EVERY MONTH" value={money(monthlyLoss)} accent />
                    <Stat label="EVERY YEAR" value={money(annualLoss)} accent />
                  </div>
                  <p style={mono('#6E7681', 11)}>
                    Based on ~{industry.missedPerMonth} missed enquiries/month at an average job value of {money(industry.jobValue)}.
                  </p>

                  {/* How Ella closes the gap */}
                  <div style={{ marginTop: '20px', padding: '16px', borderRadius: '12px', background: '#161B22', border: '1px solid #21262D' }}>
                    <p style={{ ...mono('#3FB950', 12), fontWeight: 700, letterSpacing: '0.08em', marginBottom: '10px' }}>
                      → HOW ELLA CLOSES THIS GAP
                    </p>
                    {[
                      'Answers and follows up the instant a lead comes in — 24/7.',
                      'Books the job before the customer calls the next business.',
                      'Turns every completed job into a review, a referral, and a re-booking.',
                    ].map((t) => (
                      <div key={t} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '7px' }}>
                        <CheckCircle2 size={15} style={{ color: '#3FB950', flexShrink: 0, marginTop: '1px' }} />
                        <span style={{ fontSize: '13px', color: '#E6EDF3', lineHeight: 1.45 }}>{t}</span>
                      </div>
                    ))}
                  </div>

                  {/* Email capture */}
                  {sent ? (
                    <div style={{ marginTop: '18px', display: 'flex', gap: '10px', alignItems: 'center', color: '#3FB950' }}>
                      <CheckCircle2 size={18} />
                      <span style={{ fontSize: '14px' }}>Sent. Your full {industry.name} loss report is on its way.</span>
                    </div>
                  ) : (
                    <form onSubmit={submitEmail} style={{ marginTop: '18px' }}>
                      <p style={{ fontSize: '13px', color: '#8B949E', marginBottom: '8px' }}>
                        Get the full breakdown + your custom recovery plan:
                      </p>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@yourbusiness.ca"
                          aria-label="Email address"
                          style={{
                            flex: 1, background: '#0D1117', border: '1px solid #30363D',
                            borderRadius: '8px', padding: '12px 14px', color: '#E6EDF3',
                            fontSize: '14px', outline: 'none', minHeight: '46px',
                          }}
                        />
                        <button type="submit" disabled={sending} style={{ ...termBtn, marginTop: 0, whiteSpace: 'nowrap' }} className="sld-btn">
                          {sending ? 'Sending…' : <>Email my report <ArrowRight size={15} /></>}
                        </button>
                      </div>
                      {emailErr && <p style={{ fontSize: '12px', color: 'var(--accent)', marginTop: '6px' }}>{emailErr}</p>}
                    </form>
                  )}

                  <button onClick={reset} style={{ ...mono('#6E7681', 12), background: 'none', border: 'none', cursor: 'pointer', marginTop: '18px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <RotateCcw size={13} /> Run again for another trade
                  </button>
                </Pane>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── small helpers ── */
function Pane({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

function Dot({ c }) {
  return <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: c, display: 'inline-block' }} />;
}

function Stat({ label, value, accent }) {
  return (
    <div style={{ background: '#161B22', border: `1px solid ${accent ? 'rgba(255,79,0,0.4)' : '#21262D'}`, borderRadius: '12px', padding: '16px' }}>
      <div style={mono('#6E7681', 10)}>{label}</div>
      <div style={{ ...mono(accent ? 'var(--accent)' : '#E6EDF3', 26), fontWeight: 700, marginTop: '4px' }}>{value}</div>
    </div>
  );
}

const mono = (color, size) => ({
  fontFamily: '"Geist Mono Variable", monospace',
  fontSize: `${size}px`,
  color,
  letterSpacing: '0.02em',
});

const termHead = {
  fontFamily: '"Geist Variable", "Inter", sans-serif',
  fontSize: '22px', fontWeight: 700, letterSpacing: '-0.01em',
  color: '#E6EDF3', lineHeight: 1.25, margin: '12px 0 12px',
};

const termBody = { fontSize: '15px', lineHeight: 1.65, color: '#8B949E' };

const termBtn = {
  marginTop: '24px',
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
  background: 'var(--accent)', color: '#fff', border: 'none',
  borderRadius: '8px', padding: '13px 22px', fontSize: '15px', fontWeight: 600,
  cursor: 'pointer', minHeight: '48px', transition: 'background 200ms',
};
