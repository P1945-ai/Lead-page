import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';

/**
 * Detail modal for the three product engines (Follow-Up Machine, Referral
 * Tracker, Win-Back Campaign). Follows the existing AnimatePresence modal
 * pattern used across the site (no shadcn/ui in this project).
 */
export default function CapabilityModal({ card, onClose }) {
  useEffect(() => {
    document.body.style.overflow = card ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [card]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const bookCall = () => {
    onClose();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {card && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: 'rgba(26,26,26,0.5)', backdropFilter: 'blur(4px)' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={card.title}
            className="w-full"
            style={{
              background: 'var(--surface)',
              borderRadius: '20px',
              maxWidth: '560px',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            {/* Colored header */}
            <div style={{ background: card.bg, padding: '32px', position: 'relative', color: card.fg || '#fff' }}>
              <button
                onClick={onClose}
                aria-label="Close"
                style={{
                  position: 'absolute', top: '16px', right: '16px',
                  background: 'rgba(255,255,255,0.15)', border: 'none', borderRadius: '8px',
                  width: '32px', height: '32px', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', cursor: 'pointer', color: 'inherit',
                }}
              >
                <X size={16} />
              </button>
              <span style={{ fontFamily: '"Geist Mono Variable", monospace', fontSize: '11px', letterSpacing: '0.12em', opacity: 0.75 }}>
                {card.tag}
              </span>
              <h3 style={{
                marginTop: '12px',
                fontFamily: '"Geist Variable", "Inter", sans-serif',
                fontSize: '26px', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15,
              }}>
                {card.title}
              </h3>
            </div>

            {/* Body */}
            <div style={{ padding: '32px' }}>
              <div style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--text-secondary)', whiteSpace: 'pre-line', marginBottom: '28px' }}>
                {card.detail}
              </div>
              <button onClick={bookCall} className="btn-primary w-full">
                See it on your business
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
