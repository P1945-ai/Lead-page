import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: '30-min call to map your bottleneck. Free.',
  },
  {
    number: '02',
    title: 'Build',
    description: 'We design, build, and deploy in 2–4 weeks.',
  },
  {
    number: '03',
    title: 'Operate',
    description: 'Monthly optimization. We keep it running.',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const cardAnim = {
  hidden: { opacity: 0, y: 16 },
  show:  { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

export default function HowItWorks() {
  return (
    <section
      id="process"
      className="relative py-20 sm:py-30 px-6 lg:px-8"
      style={{ borderTop: '1px solid var(--border)' }}
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

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5"
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
                borderLeft: '3px solid var(--accent)',
              }}
            >
              {/* Step number */}
              <span
                className="eyebrow block mb-4"
                style={{ fontSize: '12px' }}
              >
                {step.number}
              </span>

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
    </section>
  );
}
