import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * ProcessFlow — numbered automation steps connected by an animated dotted line.
 * Horizontal on desktop, vertical on mobile.
 *
 * Props:
 *  - steps: [{ title, desc, icon?: ReactNode }]
 *  - accent: node color
 */
export default function ProcessFlow({ steps = [], accent = 'var(--accent)' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div ref={ref} className="w-full">
      <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-4">
        {steps.map((step, i) => (
          <div key={i} className="flex md:flex-col items-start md:items-center gap-5 md:gap-0 flex-1 relative">
            {/* connector line (between this node and the next) */}
            {i < steps.length - 1 && (
              <DottedConnector inView={inView} delay={0.15 * i + 0.3} accent={accent} />
            )}

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.45, delay: 0.15 * i, ease: [0.4, 0, 0.2, 1] }}
              style={{
                flexShrink: 0,
                width: '56px', height: '56px', borderRadius: '14px',
                background: `color-mix(in srgb, ${accent} 12%, transparent)`,
                border: `1.5px solid ${accent}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: accent, zIndex: 2,
                fontFamily: '"Geist Mono Variable", monospace', fontWeight: 700, fontSize: '20px',
              }}
            >
              {step.icon || String(i + 1).padStart(2, '0')}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.15 * i + 0.1 }}
              className="md:text-center md:mt-5"
              style={{ maxWidth: '240px' }}
            >
              <div style={{
                fontFamily: '"Geist Variable", "Inter", sans-serif',
                fontSize: '17px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '6px',
              }}>
                {step.title}
              </div>
              <div style={{ fontSize: '14px', lineHeight: 1.55, color: 'var(--text-secondary)' }}>
                {step.desc}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DottedConnector({ inView, delay, accent }) {
  return (
    <>
      {/* desktop: horizontal, sits behind the top node row */}
      <motion.div
        aria-hidden="true"
        className="hidden md:block"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.5, delay, ease: 'easeOut' }}
        style={{
          position: 'absolute', top: '28px', left: '50%', right: '-50%', height: '2px',
          transformOrigin: 'left',
          backgroundImage: `linear-gradient(to right, ${accent} 60%, transparent 0%)`,
          backgroundSize: '10px 2px', backgroundRepeat: 'repeat-x',
          opacity: 0.5, zIndex: 1,
        }}
      />
      {/* mobile: vertical */}
      <motion.div
        aria-hidden="true"
        className="md:hidden"
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : {}}
        transition={{ duration: 0.5, delay, ease: 'easeOut' }}
        style={{
          position: 'absolute', left: '27px', top: '56px', bottom: '-32px', width: '2px',
          transformOrigin: 'top',
          backgroundImage: `linear-gradient(to bottom, ${accent} 60%, transparent 0%)`,
          backgroundSize: '2px 10px', backgroundRepeat: 'repeat-y',
          opacity: 0.5, zIndex: 1,
        }}
      />
    </>
  );
}
