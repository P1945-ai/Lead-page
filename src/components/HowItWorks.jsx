import { motion } from 'framer-motion';
import ProcessFlow from './visuals/ProcessFlow';

const steps = [
  { title: 'Discovery', desc: 'A 30-minute call. We map your bottleneck and design the system around how you actually work.' },
  { title: 'Build & Install', desc: 'We configure Ella, connect your tools, and install your engines — live in days, not months.' },
  { title: 'Run & Optimize', desc: 'It runs automatically. We monitor, tune, and report so the revenue keeps compounding.' },
];

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
          <h2 className="section-title">From first call to live in days.</h2>
          <p className="section-subtitle">
            No long implementations. No agency runaround. Three steps and your
            revenue engines are running.
          </p>
        </motion.div>

        <ProcessFlow steps={steps} />
      </div>
    </section>
  );
}
