import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: '30-min call to map your bottleneck. Free.',
    gradient: 'linear-gradient(135deg, var(--accent-cyan) 0%, var(--accent) 100%)',
    accentColor: 'var(--accent-cyan)',
    shadowColor: 'rgba(0,212,255,0.3)',
  },
  {
    number: '02',
    title: 'Build',
    description: 'We design, build, and deploy in 2–4 weeks.',
    gradient: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-pink) 100%)',
    accentColor: 'var(--accent)',
    shadowColor: 'rgba(91,108,255,0.3)',
  },
  {
    number: '03',
    title: 'Operate',
    description: 'Monthly optimization. We keep it running.',
    gradient: 'linear-gradient(135deg, var(--accent-amber) 0%, var(--accent-pink) 100%)',
    accentColor: 'var(--accent-amber)',
    shadowColor: 'rgba(255,181,71,0.3)',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const cardAnim = {
  hidden: { opacity: 0, y: 16 },
  show:  { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

export default function HowItWorks() {
  return (
    <section
      id="process"
      className="relative py-20 sm:py-30 px-6 lg:px-8 section-top-divider"
    >
      <div className="max-w-screen-xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-label">HOW IT WORKS</span>
          <h2 className="section-title">Three steps. No ambiguity.</h2>
          <p className="section-subtitle">
            We cut the agency process down to what actually matters.
          </p>
        </motion.div>

        {/* Steps grid with connecting line */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div
            className="absolute hidden md:block"
            style={{
              top: '28px',
              left: '22%',
              right: '22%',
              height: '1px',
              background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent), var(--accent-pink))',
              opacity: 0.35,
              zIndex: 0,
            }}
          />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6"
          >
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={cardAnim}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  padding: '32px',
                  position: 'relative',
                  zIndex: 1,
                  transition: 'border-color 200ms, box-shadow 200ms',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.boxShadow = `0 0 32px ${step.shadowColor}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Gradient circle badge */}
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: step.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    boxShadow: `0 0 20px ${step.shadowColor}`,
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: '"Geist Mono Variable", monospace',
                      fontSize: '16px',
                      fontWeight: 700,
                      color: '#fff',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: '"Geist Variable", "Inter", sans-serif',
                    fontSize: '20px',
                    fontWeight: 600,
                    letterSpacing: '-0.01em',
                    color: 'var(--text-primary)',
                    marginBottom: '10px',
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: '1.6',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
