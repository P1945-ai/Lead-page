import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import VoiceWaveform from './VoiceWaveform';

/**
 * PhoneMockup — an SVG-style phone frame with customizable screen content.
 *  - variant="chat"  → animated Ella conversation bubbles
 *  - variant="video" → video player frame with a badge + play button
 *  - children        → fully custom screen content (overrides variant)
 *
 * Props: variant, badge, accent
 */
export default function PhoneMockup({ variant = 'chat', badge, accent = 'var(--accent)', children }) {
  return (
    <div style={{ position: 'relative', width: '270px', maxWidth: '100%', margin: '0 auto' }}>
      <div
        style={{
          position: 'relative',
          borderRadius: '44px',
          background: '#1A1A1A',
          padding: '12px',
          boxShadow: 'var(--shadow-lg)',
          aspectRatio: '9/19',
        }}
      >
        {/* notch */}
        <div style={{
          position: 'absolute', top: '12px', left: '50%', transform: 'translateX(-50%)',
          width: '120px', height: '24px', background: '#1A1A1A', borderRadius: '0 0 16px 16px', zIndex: 3,
        }} />
        {/* screen */}
        <div style={{
          position: 'relative', width: '100%', height: '100%',
          borderRadius: '34px', overflow: 'hidden', background: 'var(--bg)',
        }}>
          {children || (variant === 'video'
            ? <VideoScreen badge={badge} accent={accent} />
            : <ChatScreen accent={accent} />)}
        </div>
      </div>
    </div>
  );
}

const SCRIPT = [
  { from: 'user', text: 'Hi, do you do emergency calls?' },
  { from: 'ella', text: 'We do — 24/7. I can book you in right now. What’s the issue?' },
  { from: 'user', text: 'Burst pipe under the sink.' },
  { from: 'ella', text: 'Got it. I have a tech free at 2:00 PM today. Shall I lock it in?' },
  { from: 'user', text: 'Yes please!' },
  { from: 'ella', text: 'Booked ✓ You’ll get a text confirmation. Anything else?' },
];

function ChatScreen({ accent }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { setCount(SCRIPT.length); return; }
    let i = 0;
    const id = setInterval(() => {
      i += 1; setCount(i);
      if (i >= SCRIPT.length) clearInterval(id);
    }, 900);
    return () => clearInterval(id);
  }, [inView]);

  return (
    <div ref={ref} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '34px 14px 12px', borderBottom: '1px solid var(--border)', background: 'var(--surface)' }}>
        <span style={{ width: '30px', height: '30px', borderRadius: '50%', background: accent, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '13px', fontFamily: '"Geist Variable", sans-serif' }}>E</span>
        <div>
          <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)' }}>Ella</div>
          <div style={{ fontSize: '10px', color: 'var(--success)', fontFamily: '"Geist Mono Variable", monospace' }}>● Online · replies instantly</div>
        </div>
      </div>
      {/* messages */}
      <div style={{ flex: 1, padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px', overflow: 'hidden', justifyContent: 'flex-end' }}>
        <AnimatePresence>
          {SCRIPT.slice(0, count).map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              style={{
                alignSelf: m.from === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '80%',
                background: m.from === 'user' ? accent : 'var(--surface-warm)',
                color: m.from === 'user' ? '#fff' : 'var(--text-primary)',
                borderRadius: m.from === 'user' ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
                padding: '8px 11px', fontSize: '12px', lineHeight: 1.4,
              }}
            >
              {m.text}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

function VideoScreen({ badge, accent }) {
  return (
    <div style={{ position: 'relative', height: '100%', background: 'linear-gradient(160deg, #1a1a2e 0%, #2a1a3e 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {badge && (
        <span style={{
          position: 'absolute', top: '44px', left: '14px', zIndex: 2,
          fontFamily: '"Geist Mono Variable", monospace', fontSize: '9px', letterSpacing: '0.08em',
          background: accent, color: '#fff', padding: '4px 9px', borderRadius: '999px',
        }}>{badge}</span>
      )}
      {/* play button */}
      <motion.div
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(255,255,255,0.16)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1.5px solid rgba(255,255,255,0.5)' }}
      >
        <span style={{ width: 0, height: 0, borderLeft: '18px solid #fff', borderTop: '11px solid transparent', borderBottom: '11px solid transparent', marginLeft: '5px' }} />
      </motion.div>
      {/* fake scrubber */}
      <div style={{ position: 'absolute', bottom: '20px', left: '14px', right: '14px' }}>
        <div style={{ height: '3px', borderRadius: '999px', background: 'rgba(255,255,255,0.25)' }}>
          <div style={{ width: '38%', height: '100%', borderRadius: '999px', background: accent }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px', fontFamily: '"Geist Mono Variable", monospace', fontSize: '9px', color: 'rgba(255,255,255,0.7)' }}>
          <span>0:24</span><span>1:00</span>
        </div>
      </div>
    </div>
  );
}

// Re-export so service pages can drop a waveform under the phone if needed.
export { VoiceWaveform };
