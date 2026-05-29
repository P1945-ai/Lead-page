import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    tag: 'DISCOVERY · FREE',
    title: 'Discovery',
    description: '30-min call. We map your bottleneck and design the agent.',
  },
  {
    number: '02',
    tag: 'BUILD · 2-4 WEEKS',
    title: 'Build',
    description: 'We design, build, integrate, and deploy your AI system.',
  },
  {
    number: '03',
    tag: 'OPERATE · MONTHLY',
    title: 'Operate',
    description: 'We optimize, monitor, and scale. You focus on growth.',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const cardAnim = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

export default function HowItWorks() {
  return (
    <section id="process" className="relative py-20 sm:py-30 px-6 lg:px-8" style={{ background: 'var(--surface-warm)' }}>
      <div className="mx-auto" style={{ maxWidth: '1080px' }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <span className="section-label">HOW WE WORK</span>
          <h2 className="section-title">From idea to live AI in 3 steps.</h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={cardAnim}
              style={{
                background: 'var(--surface)',
                borderRadius: '16px',
                borderLeft: '4px solid var(--accent)',
                padding: '40px',
                boxShadow: 'var(--shadow-sm)',
                transition: 'box-shadow 200ms, transform 200ms',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span
                style={{
                  fontFamily: '"Geist Mono Variable", monospace',
                  fontSize: '72px',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  lineHeight: 1,
                  display: 'block',
                  marginBottom: '16px',
                }}
              >
                {step.number}
              </span>
              <span
                style={{
                  fontFamily: '"Geist Mono Variable", monospace',
                  fontSize: '11px',
                  letterSpacing: '0.1em',
                  color: 'var(--text-muted)',
                  display: 'block',
                  marginBottom: '12px',
                }}
              >
                {step.tag}
              </span>
              <h3
                style={{
                  fontFamily: '"Geist Variable", "Inter", sans-serif',
                  fontSize: '28px',
                  fontWeight: 600,
                  letterSpacing: '-0.01em',
                  color: 'var(--text-primary)',
                  marginBottom: '10px',
                }}
              >
                {step.title}
              </h3>
              <p style={{ fontSize: '16px', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
