import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * StatCounter — counts a number up on scroll into view.
 * If `value` is a string (e.g. "PDAC presenter status"), it renders as a
 * static text stat with a fade-in instead of counting.
 *
 * Props:
 *  - value: number | string
 *  - prefix, suffix: string (e.g. '$', '%')
 *  - decimals: number
 *  - label: string (caption below)
 *  - color: accent color for the number
 *  - duration: ms
 */
export default function StatCounter({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  label,
  color = 'var(--accent)',
  duration = 1600,
  align = 'left',
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const isNumeric = typeof value === 'number';
  const [display, setDisplay] = useState(isNumeric ? 0 : value);

  useEffect(() => {
    if (!inView || !isNumeric) return;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { setDisplay(value); return; }
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, isNumeric, value, duration]);

  const shown = isNumeric
    ? Number(display).toLocaleString('en-CA', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
    : display;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      style={{ textAlign: align }}
    >
      <div style={{
        fontFamily: '"Geist Variable", "Inter", sans-serif',
        fontWeight: 700,
        letterSpacing: '-0.02em',
        lineHeight: 1.05,
        color,
        fontSize: isNumeric ? 'clamp(36px, 5vw, 56px)' : 'clamp(20px, 2.4vw, 26px)',
      }}>
        {isNumeric ? `${prefix}${shown}${suffix}` : shown}
      </div>
      {label && (
        <div style={{
          fontFamily: '"Geist Mono Variable", monospace',
          fontSize: '12px',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
          marginTop: '8px',
          lineHeight: 1.4,
        }}>
          {label}
        </div>
      )}
    </motion.div>
  );
}
