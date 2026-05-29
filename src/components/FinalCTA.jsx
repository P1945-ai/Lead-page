import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section
      className="relative py-20 sm:py-30 px-6 lg:px-8 overflow-hidden section-top-divider"
      style={{ background: 'var(--bg)' }}
    >
      {/* Vibrant multi-color radial gradient bg */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Indigo-pink blob — top left */}
        <div
          className="mesh-blob orb-vibrant"
          style={{
            position: 'absolute',
            width: '700px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(91,108,255,0.3) 0%, rgba(255,79,157,0.2) 50%, transparent 70%)',
            filter: 'blur(80px)',
            top: '-10%',
            left: '-5%',
            animationName: 'orb-drift-a',
            animationDuration: '20s',
          }}
        />
        {/* Cyan-indigo blob — bottom right */}
        <div
          className="mesh-blob orb-vibrant"
          style={{
            position: 'absolute',
            width: '600px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(0,212,255,0.22) 0%, rgba(91,108,255,0.18) 55%, transparent 75%)',
            filter: 'blur(80px)',
            bottom: '-15%',
            right: '-5%',
            animationName: 'orb-drift-b',
            animationDuration: '25s',
          }}
        />
        {/* Lime accent — center subtle */}
        <div
          className="mesh-blob orb-vibrant"
          style={{
            position: 'absolute',
            width: '400px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(80,227,164,0.1) 0%, transparent 70%)',
            filter: 'blur(60px)',
            top: '40%',
            left: '45%',
            transform: 'translate(-50%, -50%)',
            animationName: 'orb-drift-c',
            animationDuration: '30s',
          }}
        />
      </div>

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

          {/* Gradient CTA button */}
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '14px 32px',
              fontSize: '15px',
              fontWeight: 600,
              fontFamily: '"Inter", sans-serif',
              color: '#fff',
              background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-pink) 100%)',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              minHeight: '44px',
              transition: 'transform 200ms ease, box-shadow 200ms ease',
              boxShadow: '0 0 30px rgba(91,108,255,0.28)',
              marginBottom: '20px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 0 50px rgba(91,108,255,0.4), 0 0 30px rgba(255,79,157,0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(91,108,255,0.28)';
            }}
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
