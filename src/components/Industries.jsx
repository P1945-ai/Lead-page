import { motion } from 'framer-motion';
import { Home, Car, HeartPulse, ShoppingBag, Briefcase, Rocket, ArrowRight } from 'lucide-react';

const industries = [
  { icon: Home,       name: 'Real Estate',              desc: 'Lead capture, tours, and follow-up — automated.' },
  { icon: Car,        name: 'Auto Detailing & Trades',  desc: 'Bookings, quotes, and missed-call recovery.' },
  { icon: HeartPulse, name: 'Health & Wellness',        desc: 'Scheduling, intake, and reminders that run themselves.' },
  { icon: ShoppingBag,name: 'E-commerce',               desc: 'Support agents, upsells, and retention flows.' },
  { icon: Briefcase,  name: 'Professional Services',    desc: 'Client onboarding and intelligent intake.' },
  { icon: Rocket,     name: 'Startups & Founders',      desc: 'Ship the AI MVP and the growth engine together.' },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};
const cardAnim = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

export default function Industries() {
  const bookCall = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative py-20 sm:py-30 px-6 lg:px-8 section-top-divider" style={{ background: 'var(--bg)' }}>
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <span className="section-label">INDUSTRIES</span>
          <h2 className="section-title">Who we work with.</h2>
          <p className="section-subtitle">
            We build for businesses where speed of response is revenue.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {industries.map(({ icon: Icon, name, desc }) => (
            <motion.div
              key={name}
              variants={cardAnim}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '28px',
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
                  display: 'inline-flex',
                  width: '40px', height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(255,79,0,0.1)',
                  alignItems: 'center', justifyContent: 'center',
                  marginBottom: '18px',
                }}
              >
                <Icon size={20} style={{ color: 'var(--accent)' }} />
              </span>

              <h3
                style={{
                  fontFamily: '"Geist Variable", "Inter", sans-serif',
                  fontSize: '20px',
                  fontWeight: 600,
                  letterSpacing: '-0.01em',
                  color: 'var(--text-primary)',
                  marginBottom: '8px',
                }}
              >
                {name}
              </h3>
              <p style={{ fontSize: '14px', lineHeight: 1.55, color: 'var(--text-secondary)', marginBottom: '16px' }}>
                {desc}
              </p>
              <button
                onClick={bookCall}
                className="flex items-center gap-1.5 group/link"
                style={{
                  fontSize: '14px', fontWeight: 600, color: 'var(--accent)',
                  background: 'none', border: 'none', padding: 0, cursor: 'pointer',
                }}
              >
                Learn more
                <ArrowRight size={14} className="group-hover/link:translate-x-0.5" style={{ transition: 'transform 200ms' }} />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
