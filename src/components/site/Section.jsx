import { motion } from 'framer-motion';

/**
 * Section — consistent page section wrapper with optional eyebrow + title.
 * Props: id, bg, eyebrow, title, subtitle, center, maxWidth, children, className
 */
export default function Section({
  id,
  bg = 'var(--bg)',
  eyebrow,
  title,
  subtitle,
  center = true,
  maxWidth = '1080px',
  divider = false,
  children,
  className = '',
}) {
  return (
    <section
      id={id}
      className={`relative py-20 sm:py-28 px-6 lg:px-8 ${divider ? 'section-top-divider' : ''} ${className}`}
      style={{ background: bg }}
    >
      <div className="mx-auto" style={{ maxWidth }}>
        {(eyebrow || title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: center ? 'center' : 'left', marginBottom: '48px' }}
          >
            {eyebrow && <span className="section-label">{eyebrow}</span>}
            {title && <h2 className="section-title" style={{ marginLeft: center ? 'auto' : 0, marginRight: center ? 'auto' : 0 }}>{title}</h2>}
            {subtitle && (
              <p className="section-subtitle" style={{ marginLeft: center ? 'auto' : 0, marginRight: center ? 'auto' : 0 }}>
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}

/** Reveal — small scroll-in wrapper. */
export function Reveal({ children, delay = 0, y = 14 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
