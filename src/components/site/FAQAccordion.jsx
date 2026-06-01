import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

/**
 * FAQAccordion — accessible expand/collapse list.
 * Props: items: [{ q, a }]
 */
export default function FAQAccordion({ items = [] }) {
  const [open, setOpen] = useState(0);

  return (
    <div style={{ maxWidth: '760px', margin: '0 auto' }}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} style={{ borderBottom: '1px solid var(--border)' }}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              style={{
                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                gap: '16px', padding: '22px 4px', background: 'none', border: 'none', cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <span style={{ fontFamily: '"Geist Variable", sans-serif', fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)' }}>
                {item.q}
              </span>
              <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }} style={{ flexShrink: 0, color: 'var(--accent)' }}>
                <Plus size={20} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                  style={{ overflow: 'hidden' }}
                >
                  <p style={{ fontSize: '16px', lineHeight: 1.65, color: 'var(--text-secondary)', padding: '0 4px 24px', maxWidth: '680px' }}>
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
