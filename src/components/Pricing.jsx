import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const tiers = [
  {
    key: 'starter',
    name: 'STARTER',
    price: '$197',
    blurb: 'For solo operators ready to stop missing follow-ups.',
    highlight: false,
    cta: 'Start Free 14-Day Trial',
    features: [
      'Follow-Up Machine (automated 7-day client sequence)',
      'Basic referral tracking',
      'Up to 100 contacts',
      'Email + SMS automation',
      'Ella chat agent on your website',
    ],
  },
  {
    key: 'growth',
    name: 'GROWTH',
    price: '$397',
    blurb: 'For 2–5 person operations scaling repeat business.',
    highlight: true,
    cta: 'Start Free 14-Day Trial',
    features: [
      'Everything in Starter',
      'Full Referral Tracker with automated rewards',
      'Win-Back campaigns (unlimited contacts)',
      'Google Maps rank tracking',
      'Up to 3 staff users',
      'Priority support',
    ],
  },
  {
    key: 'pro',
    name: 'PRO',
    price: '$797',
    blurb: 'For established trades businesses dominating their market.',
    highlight: false,
    cta: 'Book a Demo',
    features: [
      'Everything in Growth',
      'Custom Ella voice agent answering your phone',
      'Automated review generation',
      'Full analytics dashboard',
      'Dedicated onboarding call',
      'Phone support',
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const cardAnim = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

export default function Pricing() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="pricing" className="relative py-20 sm:py-30 px-6 lg:px-8 section-top-divider" style={{ background: 'var(--bg)' }}>
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <span className="section-label">PRICING</span>
          <h2 className="section-title">Simple monthly pricing.</h2>
          <p className="section-subtitle">
            No setup fees. No contracts. Cancel anytime. Every plan is built to pay
            for itself in recovered repeat business.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch"
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.key}
              variants={cardAnim}
              style={{
                background: 'var(--surface)',
                border: tier.highlight ? '2px solid var(--accent)' : '1px solid var(--border)',
                borderRadius: '16px',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                boxShadow: tier.highlight ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
              }}
            >
              {tier.highlight && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-13px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--accent)',
                    color: '#fff',
                    fontSize: '11px',
                    fontFamily: '"Geist Mono Variable", monospace',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    padding: '5px 16px',
                    borderRadius: '999px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  RECOMMENDED
                </div>
              )}

              <span style={{ fontFamily: '"Geist Mono Variable", monospace', fontSize: '14px', letterSpacing: '0.06em', color: 'var(--text-muted)', display: 'block', marginBottom: '16px' }}>
                {tier.name}
              </span>

              <div>
                <span
                  style={{
                    fontFamily: '"Geist Variable", "Inter", sans-serif',
                    fontSize: '56px',
                    fontWeight: 700,
                    letterSpacing: '-0.03em',
                    color: 'var(--text-primary)',
                    lineHeight: 1,
                  }}
                >
                  {tier.price}
                </span>
                <span style={{ fontSize: '17px', color: 'var(--text-muted)', fontWeight: 500, marginLeft: '4px' }}>
                  /month
                </span>
              </div>
              <p style={{ fontSize: '15px', lineHeight: 1.5, color: 'var(--text-secondary)', marginTop: '12px', marginBottom: '24px' }}>
                {tier.blurb}
              </p>

              <div style={{ height: '1px', background: 'var(--border)', marginBottom: '24px' }} />

              <ul className="space-y-3 flex-1 mb-8">
                {tier.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={16} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '15px', lineHeight: 1.5, color: 'var(--text-secondary)' }}>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => scrollTo('contact')}
                className={tier.highlight ? 'btn-primary w-full' : 'btn-secondary w-full'}
              >
                {tier.cta}
                <ArrowRight size={15} />
              </button>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10 eyebrow"
          style={{ color: 'var(--text-muted)' }}
        >
          Built for Canadian small businesses. Bilingual support coming Q2 2026.
        </motion.p>
      </div>
    </section>
  );
}
