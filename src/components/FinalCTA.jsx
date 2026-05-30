import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section
      className="relative py-20 sm:py-30 px-6 lg:px-8 overflow-hidden"
      style={{ background: 'var(--surface-warm)' }}
    >
      {/* warm radial glow */}
      <div
        aria-hidden="true"
        className="gradient-warm-glow absolute pointer-events-none float-c"
        style={{ width: '800px', height: '600px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.7 }}
      />

      <div className="relative z-10 mx-auto text-center" style={{ maxWidth: '720px' }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <h2
            style={{
              fontFamily: '"Geist Variable", "Inter", sans-serif',
              fontSize: 'clamp(36px, 5.5vw, 64px)',
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '20px',
            }}
          >
            5 founding client spots remain at launch pricing.
          </h2>

          <p style={{ fontSize: '18px', lineHeight: 1.6, color: 'var(--text-secondary)', maxWidth: '520px', margin: '0 auto 36px' }}>
            Lock in $197/month forever before pricing increases June 1st.
          </p>

          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
            style={{ padding: '16px 36px', fontSize: '16px' }}
          >
            Claim Your Spot
            <ArrowRight size={17} />
          </button>

          <p className="eyebrow block" style={{ marginTop: '24px', color: 'var(--text-muted)' }}>
            or email{' '}
            <a
              href="mailto:founder@revenueengine.ltd"
              style={{ color: 'var(--accent)', textDecoration: 'none', transition: 'color 200ms' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent-hover)'; }}
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
