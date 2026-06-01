import { motion } from 'framer-motion';

/**
 * VoiceWaveform — animated SVG bars that pulse to represent Ella speaking.
 * Props:
 *  - bars: number of bars
 *  - color: bar color
 *  - height: svg height px
 *  - active: whether to animate (default true)
 */
export default function VoiceWaveform({ bars = 28, color = 'var(--accent)', height = 72, active = true }) {
  const items = Array.from({ length: bars });
  const reduce = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  return (
    <div
      role="img"
      aria-label="Ella voice waveform"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', height }}
    >
      {items.map((_, i) => {
        // Bell-ish distribution: taller toward the centre.
        const dist = 1 - Math.abs(i - bars / 2) / (bars / 2);
        const base = 0.18 + dist * 0.5;
        const peak = 0.4 + dist * 0.95;
        return (
          <motion.span
            key={i}
            initial={{ scaleY: base }}
            animate={active && !reduce ? { scaleY: [base, peak, base] } : { scaleY: base }}
            transition={{
              duration: 0.7 + (i % 5) * 0.12,
              repeat: active && !reduce ? Infinity : 0,
              ease: 'easeInOut',
              delay: (i % 7) * 0.06,
            }}
            style={{
              width: '4px',
              height: '100%',
              borderRadius: '999px',
              background: color,
              transformOrigin: 'center',
              opacity: 0.55 + dist * 0.45,
            }}
          />
        );
      })}
    </div>
  );
}
