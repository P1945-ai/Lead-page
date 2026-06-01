import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * MapPackVisualization — a custom SVG "map" with business pins and a
 * Before / After toggle that animates a business's local ranking jump.
 * No real map tiles — fully drawn.
 */
const BEFORE = [
  { rank: 1, name: 'Competitor A', you: false },
  { rank: 2, name: 'Competitor B', you: false },
  { rank: 3, name: 'Competitor C', you: false },
  { rank: 8, name: 'Your Business', you: true },
];
const AFTER = [
  { rank: 1, name: 'Your Business', you: true },
  { rank: 2, name: 'Competitor A', you: false },
  { rank: 3, name: 'Competitor B', you: false },
  { rank: 4, name: 'Competitor C', you: false },
];

// Decorative pin positions on the drawn map.
const PINS = [
  { x: 28, y: 32 }, { x: 64, y: 22 }, { x: 46, y: 54 },
  { x: 78, y: 60 }, { x: 18, y: 68 }, { x: 58, y: 78 },
];

export default function MapPackVisualization({ accent = 'var(--accent)' }) {
  const [after, setAfter] = useState(false);
  const list = after ? AFTER : BEFORE;

  return (
    <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', boxShadow: 'var(--shadow-md)', overflow: 'hidden' }}>
      {/* toggle */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 16px', borderBottom: '1px solid var(--border)', background: 'var(--surface-warm)' }}>
        <span style={{ fontFamily: '"Geist Mono Variable", monospace', fontSize: '12px', color: 'var(--text-muted)', letterSpacing: '0.04em' }}>
          GOOGLE MAP PACK · LOCAL RANK
        </span>
        <div style={{ display: 'flex', background: 'var(--bg)', borderRadius: '999px', padding: '3px', border: '1px solid var(--border)' }}>
          {['Before', 'After'].map((label, i) => {
            const activeTab = (i === 1) === after;
            return (
              <button
                key={label}
                onClick={() => setAfter(i === 1)}
                style={{
                  border: 'none', cursor: 'pointer', borderRadius: '999px',
                  padding: '5px 14px', fontSize: '12px', fontWeight: 600,
                  background: activeTab ? accent : 'transparent',
                  color: activeTab ? '#fff' : 'var(--text-secondary)',
                  transition: 'background 200ms, color 200ms',
                }}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2">
        {/* drawn map */}
        <div style={{ position: 'relative', minHeight: '240px', background: 'linear-gradient(135deg, #EEF1F5 0%, #E7ECEF 100%)' }}>
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} aria-hidden="true">
            {/* roads */}
            <g stroke="#D4DAE0" strokeWidth="2" fill="none">
              <path d="M0 30 H100" /><path d="M0 64 H100" />
              <path d="M34 0 V100" /><path d="M72 0 V100" />
            </g>
            <g stroke="#DCE2E7" strokeWidth="1" fill="none">
              <path d="M0 48 H100" /><path d="M54 0 V100" />
            </g>
            {/* parks */}
            <rect x="6" y="70" width="20" height="20" rx="3" fill="#D6E7D2" />
            <rect x="76" y="6" width="18" height="16" rx="3" fill="#D6E7D2" />
          </svg>

          {/* decorative pins */}
          {PINS.map((p, i) => (
            <Pin key={i} x={p.x} y={p.y} small color="#A6AEB8" delay={i * 0.05} />
          ))}
          {/* the highlighted business pin moves toward centre when "after" */}
          <motion.div
            initial={false}
            animate={after ? { left: '47%', top: '40%' } : { left: '20%', top: '72%' }}
            transition={{ type: 'spring', stiffness: 120, damping: 16 }}
            style={{ position: 'absolute', transform: 'translate(-50%, -100%)', zIndex: 4 }}
          >
            <BigPin accent={accent} rank={list.find((l) => l.you)?.rank} />
          </motion.div>
        </div>

        {/* ranking list */}
        <div style={{ padding: '16px' }}>
          <AnimatePresence mode="wait">
            <motion.ul
              key={after ? 'after' : 'before'}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
            >
              {list.map((b) => (
                <li key={b.name} style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  padding: '10px 12px', borderRadius: '8px',
                  background: b.you ? `color-mix(in srgb, ${accent} 12%, transparent)` : 'var(--surface-warm)',
                  border: b.you ? `1px solid ${accent}` : '1px solid transparent',
                }}>
                  <span style={{
                    width: '26px', height: '26px', borderRadius: '7px', flexShrink: 0,
                    background: b.you ? accent : 'var(--border)',
                    color: b.you ? '#fff' : 'var(--text-secondary)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: '"Geist Mono Variable", monospace', fontWeight: 700, fontSize: '12px',
                  }}>{b.rank}</span>
                  <span style={{ fontSize: '13px', fontWeight: b.you ? 700 : 500, color: 'var(--text-primary)' }}>
                    {b.name}
                  </span>
                  {b.you && (
                    <span style={{ marginLeft: 'auto', fontFamily: '"Geist Mono Variable", monospace', fontSize: '11px', color: accent }}>
                      {after ? '▲ #1' : 'page 1?'}
                    </span>
                  )}
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function Pin({ x, y, color, small, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, type: 'spring', stiffness: 200, damping: 14 }}
      style={{ position: 'absolute', left: `${x}%`, top: `${y}%`, transform: 'translate(-50%,-100%)' }}
    >
      <svg width={small ? 14 : 20} height={small ? 18 : 26} viewBox="0 0 20 26" fill={color}>
        <path d="M10 0C4.5 0 0 4.4 0 9.9 0 17 10 26 10 26s10-9 10-16.1C20 4.4 15.5 0 10 0z" />
        <circle cx="10" cy="10" r="3.4" fill="#fff" />
      </svg>
    </motion.div>
  );
}

function BigPin({ accent, rank }) {
  return (
    <div style={{ position: 'relative' }}>
      <svg width="34" height="44" viewBox="0 0 20 26" fill={accent} style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.25))' }}>
        <path d="M10 0C4.5 0 0 4.4 0 9.9 0 17 10 26 10 26s10-9 10-16.1C20 4.4 15.5 0 10 0z" />
        <circle cx="10" cy="10" r="3.6" fill="#fff" />
      </svg>
      <span style={{
        position: 'absolute', top: '-10px', right: '-12px',
        background: '#fff', border: `1.5px solid ${accent}`, color: accent,
        borderRadius: '999px', fontSize: '10px', fontFamily: '"Geist Mono Variable", monospace',
        fontWeight: 700, padding: '1px 6px',
      }}>#{rank}</span>
    </div>
  );
}
