import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const badges = [
  { label: 'Founder-led',          bg: 'var(--accent)',           color: '#fff' },
  { label: 'Ships in days',        bg: 'var(--accent-secondary)', color: '#fff' },
  { label: 'Built 12+ AI systems', bg: '#1A1A1A',                 color: '#fff' },
];

export default function Founder() {
  return (
    <section id="about" className="relative py-20 sm:py-30 px-6 lg:px-8 section-top-divider" style={{ background: 'var(--bg)' }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — photo */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            style={{ aspectRatio: '4/5', maxHeight: '560px' }}
          >
            <div
              style={{
                width: '100%', height: '100%',
                borderRadius: '16px', overflow: 'hidden',
                boxShadow: 'var(--shadow-md)', border: '1px solid var(--border)',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
                alt="Founder — Revenue Engine Limited"
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </motion.div>

          {/* Right — copy */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="section-label">FOUNDER</span>

            <h2
              style={{
                fontFamily: '"Geist Variable", "Inter", sans-serif',
                fontSize: 'clamp(32px, 4vw, 48px)',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '24px',
              }}
            >
              Built by an operator who runs real businesses.
            </h2>

            <div style={{ fontSize: '17px', lineHeight: 1.75, color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
              <p>
                Revenue Engine Limited was started by someone who spent years inside businesses
                — not just building software for them. Every system we build reflects that
                operational perspective.
              </p>
              <p>
                We don't design for demos. We design for daily use, real revenue cycles, and the
                teams who operate what we ship. That's a different mindset than most agencies bring.
              </p>
              <p>
                We work with a small number of clients at a time, intentionally — close to the
                work, accountable for the outcome.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {badges.map((b) => (
                <span
                  key={b.label}
                  style={{
                    background: b.bg,
                    color: b.color,
                    fontSize: '13px',
                    fontWeight: 600,
                    fontFamily: '"Inter", sans-serif',
                    padding: '7px 14px',
                    borderRadius: '999px',
                  }}
                >
                  {b.label}
                </span>
              ))}
            </div>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                fontSize: '15px', fontWeight: 600, color: 'var(--accent)',
                background: 'none', border: 'none', padding: 0, cursor: 'pointer',
                transition: 'color 200ms',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent-hover)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
            >
              Read the full story
              <ArrowRight size={15} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
