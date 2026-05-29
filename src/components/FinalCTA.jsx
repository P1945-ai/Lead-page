import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section
      className="relative py-20 sm:py-30 px-6 lg:px-8 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, var(--bg) 0%, var(--surface) 100%)',
        borderTop: '1px solid var(--border)',
      }}
    >
      {/* Accent glow */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          width: '600px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(91,108,255,0.18) 0%, transparent 65%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(40px)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-hero mx-auto text-center">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <h2
            style={{
              fontFamily: '"Geist Variable", "Inter", sans-serif',
              fontSize: 'clamp(32px, 5.5vw, 64px)',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '20px',
            }}
          >
            Ready to ship your AI advantage?
          </h2>

          <p
            style={{
              fontSize: '18px',
              lineHeight: '1.6',
              color: 'var(--text-secondary)',
              maxWidth: '480px',
              margin: '0 auto 36px',
            }}
          >
            5 partner spots open at launch pricing. First come, first served.
          </p>

          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
            style={{ padding: '14px 32px', fontSize: '15px', marginBottom: '20px' }}
          >
            Book your intro call
            <ArrowRight size={16} />
          </button>

          <p className="eyebrow block" style={{ marginTop: '16px' }}>
            or email{' '}
            <a
              href="mailto:founder@revenueengine.ltd"
              style={{
                color: 'var(--accent)',
                textDecoration: 'none',
                transition: 'color 200ms',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent-glow)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
            >
              founder@revenueengine.ltd
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
