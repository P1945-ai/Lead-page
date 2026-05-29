import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const tiers = [
  {
    key: 'starter',
    name: 'STARTER',
    price: '$2,500',
    monthly: '$297',
    highlight: false,
    features: [
      'Single-system build (landing page, chatbot, or automation)',
      'Up to 3 integration connections',
      '2 revision rounds',
      'Basic analytics dashboard',
      'Email support',
      '30-day post-launch coverage',
    ],
  },
  {
    key: 'pro',
    name: 'PRO',
    price: '$7,500',
    monthly: '$747',
    highlight: true,
    features: [
      'Full-stack AI system build',
      'Up to 8 integration connections',
      'Unlimited revision rounds',
      'Custom analytics + reporting',
      'Priority Slack support',
      '90-day post-launch coverage',
    ],
  },
  {
    key: 'enterprise',
    name: 'ENTERPRISE',
    price: '$15,000',
    monthly: '$1,500',
    highlight: false,
    features: [
      'Multi-system platform build',
      'Unlimited integrations',
      'Dedicated build team',
      'Custom data infrastructure',
      'Dedicated Slack channel + calls',
      '12-month partnership & retainer',
    ],
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

export default function Pricing() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="pricing"
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
          <span className="section-label">PRICING</span>
          <h2 className="section-title">
            Transparent pricing.<br />No retainer traps.
          </h2>
          <p className="section-subtitle">
            One-time build fee covers design, development, and deployment.
            Monthly covers hosting, maintenance, and optimization.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 items-stretch"
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.key}
              variants={cardAnim}
              style={{
                background: tier.highlight ? 'var(--surface-elevated)' : 'var(--surface)',
                border: tier.highlight
                  ? '1px solid var(--accent)'
                  : '1px solid var(--border)',
                borderRadius: '16px',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: tier.highlight ? '0 0 40px rgba(91,108,255,0.12)' : 'none',
                position: 'relative',
              }}
            >
              {tier.highlight && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-1px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--accent)',
                    color: '#fff',
                    fontSize: '10px',
                    fontFamily: '"Geist Mono Variable", monospace',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    padding: '4px 14px',
                    borderRadius: '0 0 8px 8px',
                  }}
                >
                  MOST POPULAR
                </div>
              )}

              {/* Tier name */}
              <span
                className="eyebrow block mb-6"
                style={{ fontSize: '12px' }}
              >
                {tier.name}
              </span>

              {/* Price */}
              <div style={{ marginBottom: '4px' }}>
                <span
                  style={{
                    fontFamily: '"Geist Variable", "Inter", sans-serif',
                    fontSize: '52px',
                    fontWeight: 700,
                    letterSpacing: '-0.03em',
                    color: 'var(--text-primary)',
                    lineHeight: 1,
                  }}
                >
                  {tier.price}
                </span>
              </div>
              <p
                style={{
                  fontSize: '13px',
                  color: 'var(--text-muted)',
                  marginBottom: '24px',
                }}
              >
                one-time + {tier.monthly}/mo
              </p>

              {/* Divider */}
              <div
                style={{
                  height: '1px',
                  background: 'var(--border)',
                  marginBottom: '24px',
                }}
              />

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-8">
                {tier.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check
                      size={15}
                      style={{
                        color: 'var(--success)',
                        flexShrink: 0,
                        marginTop: '2px',
                      }}
                    />
                    <span
                      style={{
                        fontSize: '14px',
                        lineHeight: '1.5',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => scrollTo('contact')}
                className={tier.highlight ? 'btn-primary w-full' : 'btn-secondary w-full'}
                style={{ padding: '12px 20px', fontSize: '14px' }}
              >
                Get started
                <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10 eyebrow"
        >
          All tiers include launch pricing. Prices increase after 5 partner clients.
        </motion.p>
      </div>
    </section>
  );
}
