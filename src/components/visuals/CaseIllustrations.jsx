import { motion } from 'framer-motion';

/**
 * Abstract, fully-drawn SVG illustrations for the three case studies.
 * No screenshots, no photos — these render live and animate subtly.
 * Each fills its parent; wrap in an aspect-ratio box.
 */

// OMAD — globe with trade-route arcs connecting Canada + Central Asia. Gold/navy.
export function OmadIllustration({ animate = true }) {
  return (
    <svg viewBox="0 0 400 260" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Cross-border trade corridor">
      <defs>
        <linearGradient id="omad-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0E1A2B" />
          <stop offset="1" stopColor="#1B2C44" />
        </linearGradient>
        <radialGradient id="omad-globe" cx="0.4" cy="0.35" r="0.8">
          <stop offset="0" stopColor="#27406A" />
          <stop offset="1" stopColor="#152540" />
        </radialGradient>
        <linearGradient id="omad-arc" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#D4AF37" />
          <stop offset="1" stopColor="#F0CF6B" />
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill="url(#omad-bg)" />
      {/* longitude/latitude grid globe */}
      <g transform="translate(200 135)">
        <circle r="92" fill="url(#omad-globe)" stroke="#3B5577" />
        <g stroke="#3B5577" strokeOpacity="0.5" fill="none" strokeWidth="1">
          <ellipse rx="92" ry="30" /><ellipse rx="92" ry="60" /><ellipse rx="60" ry="92" /><ellipse rx="30" ry="92" />
          <line x1="-92" y1="0" x2="92" y2="0" /><line x1="0" y1="-92" x2="0" y2="92" />
        </g>
      </g>
      {/* nodes */}
      {[{ x: 120, y: 95, label: 'CA' }, { x: 290, y: 120, label: 'UZ' }].map((n) => (
        <g key={n.label}>
          <circle cx={n.x} cy={n.y} r="5" fill="#D4AF37" />
          <circle cx={n.x} cy={n.y} r="9" fill="none" stroke="#D4AF37" strokeOpacity="0.5" />
        </g>
      ))}
      {/* trade arc */}
      <motion.path
        d="M120 95 Q205 20 290 120"
        fill="none" stroke="url(#omad-arc)" strokeWidth="2.5" strokeLinecap="round"
        strokeDasharray="6 6"
        initial={animate ? { pathLength: 0 } : false}
        whileInView={animate ? { pathLength: 1 } : undefined}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: 'easeInOut' }}
      />
      <motion.circle r="3.5" fill="#fff"
        initial={animate ? { offsetDistance: '0%' } : false}
        animate={animate ? { offsetDistance: '100%' } : undefined}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        style={{ offsetPath: 'path("M120 95 Q205 20 290 120")' }}
      />
    </svg>
  );
}

// Road Ready — private jet silhouette, dark + gold luxury.
export function RoadReadyIllustration({ animate = true }) {
  return (
    <svg viewBox="0 0 400 260" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Private aviation detailing">
      <defs>
        <linearGradient id="rr-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0A0A0A" />
          <stop offset="1" stopColor="#161412" />
        </linearGradient>
        <linearGradient id="rr-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#D4AF37" />
          <stop offset="1" stopColor="#9A7B22" />
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill="url(#rr-bg)" />
      {/* hangar floor reflection */}
      <rect y="180" width="400" height="80" fill="#000" opacity="0.5" />
      <g opacity="0.18">
        {[60, 140, 220, 300].map((x) => <line key={x} x1={x} y1="180" x2={x - 30} y2="260" stroke="#D4AF37" />)}
      </g>
      {/* jet */}
      <motion.g
        initial={animate ? { x: -16, opacity: 0 } : false}
        whileInView={animate ? { x: 0, opacity: 1 } : undefined}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <path d="M70 150 L250 138 Q300 135 340 150 Q300 158 250 156 L120 162 Z" fill="url(#rr-gold)" />
        <path d="M150 142 L180 110 L196 110 L188 140 Z" fill="url(#rr-gold)" opacity="0.85" />
        <path d="M150 156 L180 188 L196 188 L188 158 Z" fill="url(#rr-gold)" opacity="0.6" />
        <path d="M250 138 L300 120 L312 124 L286 144 Z" fill="url(#rr-gold)" opacity="0.85" />
        <circle cx="318" cy="150" r="3" fill="#fff" />
      </motion.g>
      {/* sparkle */}
      <motion.g animate={animate ? { opacity: [0.2, 1, 0.2] } : undefined} transition={{ duration: 2.2, repeat: Infinity }}>
        <path d="M300 90 l3 8 8 3 -8 3 -3 8 -3 -8 -8 -3 8 -3z" fill="#F0CF6B" />
      </motion.g>
    </svg>
  );
}

// LocalBoost — grid of map pins with a pulsing highlight.
export function LocalBoostIllustration({ animate = true }) {
  const pins = [];
  for (let r = 0; r < 4; r++) for (let c = 0; c < 6; c++) pins.push({ x: 40 + c * 60, y: 50 + r * 55, key: `${r}-${c}` });
  const hero = pins[14];
  return (
    <svg viewBox="0 0 400 260" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Local visibility map grid">
      <defs>
        <linearGradient id="lb-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F5F0E8" />
          <stop offset="1" stopColor="#FFE8D6" />
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill="url(#lb-bg)" />
      <g stroke="#E2C7AE" strokeWidth="1" opacity="0.6">
        {[1, 2, 3].map((i) => <line key={`h${i}`} x1="0" y1={i * 65} x2="400" y2={i * 65} />)}
        {[1, 2, 3, 4, 5].map((i) => <line key={`v${i}`} x1={i * 66} y1="0" x2={i * 66} y2="260" />)}
      </g>
      {pins.map((p) => {
        const isHero = p === hero;
        return (
          <g key={p.key} transform={`translate(${p.x} ${p.y})`}>
            {isHero && (
              <motion.circle r="6" fill="none" stroke="#FF4F00"
                animate={animate ? { r: [6, 22], opacity: [0.6, 0] } : undefined}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }} />
            )}
            <path d="M0 -14 C-7 -14 -11 -9 -11 -4 C-11 3 0 14 0 14 S11 3 11 -4 C11 -9 7 -14 0 -14 Z"
              fill={isHero ? '#FF4F00' : '#B9A089'} />
            <circle cy="-4" r="3.4" fill="#fff" />
          </g>
        );
      })}
    </svg>
  );
}

export const caseIllustrations = {
  omad: OmadIllustration,
  'road-ready': RoadReadyIllustration,
  localboost: LocalBoostIllustration,
};
