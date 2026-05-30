import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Check, Quote } from 'lucide-react';

/**
 * Per-industry detail dialog. Opens in place (no navigation), shows the
 * industry's loss headline, pain points, how the three engines solve them,
 * a placeholder testimonial, and a CTA that pre-fills the contact form.
 */
export default function IndustryModal({ industry, onClose }) {
  useEffect(() => {
    document.body.style.overflow = industry ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [industry]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const goToContact = () => {
    onClose();
    // Pre-fill the contact form with this industry, then scroll to it.
    window.dispatchEvent(new CustomEvent('prefill-contact', {
      detail: {
        industry: industry.name,
        project: `Revenue Engine for my ${industry.name.toLowerCase()} business`,
      },
    }));
    setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 60);
  };

  return (
    <AnimatePresence>
      {industry && (
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
            aria-label={`${industry.name} — how Revenue Engine helps`}
            className="w-full"
            style={{
              background: 'var(--surface)',
              borderRadius: '20px',
              maxWidth: '580px',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            {/* Header */}
            <div style={{ position: 'relative', padding: '32px 32px 24px', borderBottom: '1px solid var(--border)' }}>
              <button
                onClick={onClose}
                aria-label="Close"
                style={{
                  position: 'absolute', top: '16px', right: '16px',
                  background: 'var(--surface-warm)', border: 'none', borderRadius: '8px',
                  width: '32px', height: '32px', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', cursor: 'pointer', color: 'var(--text-primary)',
                }}
              >
                <X size={16} />
              </button>
              <span style={{
                display: 'inline-flex', width: '44px', height: '44px', borderRadius: '12px',
                background: 'rgba(255,79,0,0.1)', alignItems: 'center', justifyContent: 'center', marginBottom: '16px',
              }}>
                <industry.icon size={22} style={{ color: 'var(--accent)' }} />
              </span>
              <h3 style={{
                fontFamily: '"Geist Variable", "Inter", sans-serif',
                fontSize: '24px', fontWeight: 700, letterSpacing: '-0.02em',
                color: 'var(--text-primary)', lineHeight: 1.2, paddingRight: '32px',
              }}>
                {industry.lossHeadline}
              </h3>
            </div>

            <div style={{ padding: '28px 32px 32px' }}>
              {/* Pain points */}
              <p className="eyebrow block" style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '12px' }}>
                WHERE THE MONEY LEAKS
              </p>
              <ul style={{ marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {industry.pains.map((p) => (
                  <li key={p} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0, marginTop: '8px' }} />
                    <span style={{ fontSize: '15px', lineHeight: 1.55, color: 'var(--text-secondary)' }}>{p}</span>
                  </li>
                ))}
              </ul>

              {/* How engines solve */}
              <p className="eyebrow block" style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '12px' }}>
                HOW REVENUE ENGINE FIXES IT
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                {industry.solutions.map((s) => (
                  <div key={s.engine} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <Check size={16} style={{ color: 'var(--success)', flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ fontSize: '14px', lineHeight: 1.5, color: 'var(--text-secondary)' }}>
                      <strong style={{ color: 'var(--text-primary)' }}>{s.engine}:</strong> {s.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Testimonial placeholder */}
              <div style={{ background: 'var(--surface-warm)', borderRadius: '12px', padding: '18px 20px', marginBottom: '24px' }}>
                <Quote size={18} style={{ color: 'var(--accent)', marginBottom: '8px' }} />
                <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--text-primary)', fontStyle: 'italic', marginBottom: '8px' }}>
                  {industry.quote}
                </p>
                <p style={{ fontFamily: '"Geist Mono Variable", monospace', fontSize: '11px', letterSpacing: '0.06em', color: 'var(--text-muted)' }}>
                  — PENDING REAL TESTIMONIAL
                </p>
              </div>

              <button onClick={goToContact} className="btn-primary w-full">
                See How It Works For {industry.name}
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
