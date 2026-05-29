import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';

// Decagon-style capability cards — "What we build for you"
const cards = [
  {
    key: 'voice',
    bg: '#2E1A47',
    eyebrow: 'AI VOICE AGENTS',
    big: 'Talk · 24/7',
    bottom: 'Book calls, qualify leads, answer questions',
    detail:
      'Always-on voice agents that answer your phone, qualify inbound leads, book meetings straight to your calendar, and handle FAQs — in a natural human voice. Built on ElevenLabs, Bland, and Vapi, tuned to your business and your tone.',
  },
  {
    key: 'revenue',
    bg: '#1F5F4A',
    eyebrow: 'REVENUE AUTOMATION',
    big: 'Pipeline+',
    bottom: 'From lead capture to closed-won',
    detail:
      'End-to-end revenue workflows: capture leads from every channel, enrich and route them, trigger follow-ups, and push clean data to your CRM. The pipeline runs itself so your team only touches deals that are ready to close.',
  },
  {
    key: 'agents',
    bg: '#1E3A5F',
    eyebrow: 'CUSTOM AI AGENTS',
    big: 'Built · For you',
    bottom: 'Tailored to your business, not templated',
    detail:
      'Bespoke agents designed around your actual operations — your data, your tools, your edge cases. Not a generic template with your logo slapped on. We map the bottleneck, then build the agent that removes it.',
  },
  {
    key: 'mvp',
    bg: '#4A7A2E',
    eyebrow: 'SAAS MVPS',
    big: 'Ship · Fast',
    bottom: 'Production-ready apps in 2-4 weeks',
    detail:
      'Full-stack, production-ready MVPs in 2–4 weeks. Auth, payments, dashboards, integrations — shipped and deployed, not a clickable prototype. Built to put in front of real users and real revenue immediately.',
  },
  {
    key: 'growth',
    bg: '#4A2E7A',
    eyebrow: 'GROWTH SYSTEMS',
    big: 'Scale · Calm',
    bottom: 'Marketing automation that runs itself',
    detail:
      'Marketing and growth automation that compounds while you sleep: content engines, SEO structure, nurture sequences, and reporting. Systems that scale your reach without scaling your stress or your headcount.',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};
const cardAnim = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

export default function FeaturedProjects() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selected]);

  return (
    <>
      <section id="projects" className="relative py-20 sm:py-30 px-6 lg:px-8 section-top-divider" style={{ background: 'var(--bg)' }}>
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="section-header"
          >
            <span className="section-label">WHAT WE BUILD</span>
            <h2 className="section-title">What we build for you.</h2>
            <p className="section-subtitle">
              Five systems that do the work — so you keep the leverage and lose the headcount.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
          >
            {cards.map((card) => (
              <motion.button
                key={card.key}
                variants={cardAnim}
                onClick={() => setSelected(card)}
                className="text-left"
                style={{
                  background: card.bg,
                  borderRadius: '16px',
                  padding: '32px',
                  minHeight: '260px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'transform 200ms cubic-bezier(0.4,0,0.2,1), box-shadow 200ms',
                  color: '#fff',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                aria-label={`Learn more about ${card.eyebrow}`}
              >
                <span
                  style={{
                    fontFamily: '"Geist Mono Variable", monospace',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    color: 'rgba(255,255,255,0.7)',
                  }}
                >
                  {card.eyebrow}
                </span>

                <div style={{ margin: '24px 0' }}>
                  <span
                    style={{
                      fontFamily: '"Geist Variable", "Inter", sans-serif',
                      fontSize: '30px',
                      fontWeight: 700,
                      letterSpacing: '-0.02em',
                      lineHeight: 1.1,
                    }}
                  >
                    {card.big}
                  </span>
                </div>

                <span style={{ fontSize: '14px', lineHeight: 1.5, color: 'rgba(255,255,255,0.82)' }}>
                  {card.bottom}
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Detail modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelected(null)}
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
              style={{
                background: 'var(--surface)',
                borderRadius: '20px',
                maxWidth: '520px',
                width: '100%',
                boxShadow: 'var(--shadow-lg)',
                overflow: 'hidden',
              }}
            >
              <div style={{ background: selected.bg, padding: '32px', position: 'relative' }}>
                <button
                  onClick={() => setSelected(null)}
                  aria-label="Close"
                  style={{
                    position: 'absolute', top: '16px', right: '16px',
                    background: 'rgba(255,255,255,0.15)', border: 'none', borderRadius: '8px',
                    width: '32px', height: '32px', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', cursor: 'pointer', color: '#fff',
                  }}
                >
                  <X size={16} />
                </button>
                <span style={{ fontFamily: '"Geist Mono Variable", monospace', fontSize: '11px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.7)' }}>
                  {selected.eyebrow}
                </span>
                <div style={{ marginTop: '12px', fontFamily: '"Geist Variable", "Inter", sans-serif', fontSize: '32px', fontWeight: 700, letterSpacing: '-0.02em', color: '#fff' }}>
                  {selected.big}
                </div>
              </div>

              <div style={{ padding: '32px' }}>
                <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '28px' }}>
                  {selected.detail}
                </p>
                <button
                  onClick={() => { setSelected(null); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="btn-primary w-full"
                >
                  Book a call about this
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
