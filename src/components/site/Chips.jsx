import { motion } from 'framer-motion';

/** Chips — pill row for industries / tech stacks. */
export default function Chips({ items = [], accent = 'var(--accent)', mono = false }) {
  return (
    <div className="flex flex-wrap gap-2.5 justify-center">
      {items.map((label, i) => (
        <motion.span
          key={label}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: i * 0.03 }}
          style={{
            display: 'inline-flex', alignItems: 'center',
            background: 'var(--surface)', border: '1px solid var(--border)',
            color: 'var(--text-secondary)', borderRadius: '999px',
            padding: '8px 16px', fontSize: '14px', fontWeight: 500,
            fontFamily: mono ? '"Geist Mono Variable", monospace' : 'Inter, sans-serif',
            letterSpacing: mono ? '0.02em' : 'normal',
          }}
        >
          {mono && <span style={{ color: accent, marginRight: '7px' }}>·</span>}
          {label}
        </motion.span>
      ))}
    </div>
  );
}
