import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const statBadges = [
  {
    value: 'Founder-led',
    label: 'No agency overhead',
    gradient: 'linear-gradient(135deg, rgba(255,181,71,0.18), rgba(255,79,157,0.14))',
    border: 'rgba(255,181,71,0.3)',
    color: 'var(--accent-amber)',
  },
  {
    value: 'Ships in days',
    label: 'Not months',
    gradient: 'linear-gradient(135deg, rgba(0,212,255,0.16), rgba(91,108,255,0.14))',
    border: 'rgba(0,212,255,0.28)',
    color: 'var(--accent-cyan)',
  },
  {
    value: '12+ apps built',
    label: 'All in-house',
    gradient: 'linear-gradient(135deg, rgba(80,227,164,0.16), rgba(0,212,255,0.14))',
    border: 'rgba(80,227,164,0.28)',
    color: 'var(--accent-lime)',
  },
];

export default function Founder() {
  return (
    <section
      className="relative py-20 sm:py-30 px-6 lg:px-8 section-top-divider"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — photo */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            style={{ aspectRatio: '4/5', maxHeight: '560px', position: 'relative' }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '16px',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 0 60px rgba(91,108,255,0.18), 0 24px 48px rgba(0,0,0,0.5)',
              }}
            >
              {/* Photo */}
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
                alt="Founder — Revenue Engine Limited"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
                loading="lazy"
              />

              {/* Gradient overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, rgba(91,108,255,0.35) 0%, rgba(255,79,157,0.2) 100%)',
                  mixBlendMode: 'multiply',
                }}
              />

              {/* Bottom fade for badge legibility */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '50%',
                  background: 'linear-gradient(to top, rgba(10,10,15,0.75) 0%, transparent 100%)',
                }}
              />

              {/* Stat badges */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '16px',
                  right: '16px',
                  display: 'flex',
                  gap: '8px',
                  flexWrap: 'wrap',
                }}
              >
                {statBadges.map((badge) => (
                  <div
                    key={badge.value}
                    style={{
                      background: badge.gradient,
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                      border: `1px solid ${badge.border}`,
                      borderRadius: '10px',
                      padding: '8px 12px',
                      flex: '1 1 auto',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: '"Geist Variable", "Inter", sans-serif',
                        fontSize: '13px',
                        fontWeight: 700,
                        color: badge.color,
                        lineHeight: 1.2,
                        marginBottom: '2px',
                      }}
                    >
                      {badge.value}
                    </div>
                    <div
                      style={{
                        fontFamily: '"Geist Mono Variable", monospace',
                        fontSize: '9px',
                        letterSpacing: '0.07em',
                        textTransform: 'uppercase',
                        color: 'rgba(255,255,255,0.45)',
                      }}
                    >
                      {badge.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — copy */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="section-label">FOUNDER</span>

            <h2
              style={{
                fontFamily: '"Geist Variable", "Inter", sans-serif',
                fontSize: 'clamp(28px, 4vw, 40px)',
                lineHeight: '1.2',
                letterSpacing: '-0.02em',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '24px',
              }}
            >
              Built by an operator,<br />not an agency.
            </h2>

            <div
              style={{
                fontSize: '16px',
                lineHeight: '1.75',
                color: 'var(--text-secondary)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                marginBottom: '32px',
              }}
            >
              <p>
                Revenue Engine Limited was started by someone who spent years inside businesses
                — not just building software for them. Every system we build reflects that
                operational perspective.
              </p>
              <p>
                We don't design for demos. We design for daily use, real revenue cycles, and
                the teams who have to operate what we ship. That's a different mindset than
                most agencies bring.
              </p>
              <p>
                We work with a small number of clients at a time, intentionally. That's how
                we stay close to the work and guarantee the quality we want to put our name on.
              </p>
            </div>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--accent)',
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                transition: 'color 200ms',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent-glow)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
            >
              Read the full story
              <ArrowRight size={14} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
