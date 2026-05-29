import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Founder() {
  return (
    <section
      className="relative py-20 sm:py-30 px-6 lg:px-8"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            style={{ aspectRatio: '4/5', maxHeight: '560px' }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, var(--surface-elevated) 0%, var(--surface) 100%)',
                border: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Abstract gradient placeholder */}
              <div
                style={{
                  position: 'absolute',
                  width: '400px',
                  height: '400px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(91,108,255,0.2) 0%, transparent 70%)',
                  top: '-100px',
                  left: '-100px',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  width: '300px',
                  height: '300px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(123,91,255,0.15) 0%, transparent 70%)',
                  bottom: '-80px',
                  right: '-80px',
                }}
              />
              <span
                className="eyebrow relative z-10"
                style={{ fontSize: '11px', textAlign: 'center' }}
              >
                FOUNDER PHOTO
                <br />
                <span style={{ color: 'var(--border)', marginTop: '4px', display: 'block' }}>
                  placeholder
                </span>
              </span>
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
