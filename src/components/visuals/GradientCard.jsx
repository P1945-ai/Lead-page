import { motion } from 'framer-motion';

/**
 * GradientCard — reusable card with a subtle gradient mesh background.
 * Props:
 *  - accent: base color for the mesh (default orange)
 *  - className, style: passthrough
 *  - hover: enable lift on hover
 */
export default function GradientCard({ children, accent = 'var(--accent)', className = '', style = {}, hover = true }) {
  return (
    <motion.div
      className={className}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
      style={{
        position: 'relative',
        borderRadius: '8px',
        border: '1px solid var(--border)',
        background: 'var(--surface)',
        boxShadow: 'var(--shadow-sm)',
        overflow: 'hidden',
        ...style,
      }}
    >
      {/* mesh */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: `radial-gradient(120% 80% at 0% 0%, color-mix(in srgb, ${accent} 10%, transparent) 0%, transparent 45%),
                       radial-gradient(120% 80% at 100% 0%, color-mix(in srgb, var(--accent-secondary) 8%, transparent) 0%, transparent 50%)`,
          opacity: 0.9,
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </motion.div>
  );
}
