import { motion } from 'framer-motion';

const stack = [
  'OpenAI',
  'Anthropic',
  'Stripe',
  'Vercel',
  'Supabase',
  'MongoDB',
  'Resend',
];

export default function TrustBar() {
  return (
    <section
      className="relative py-16 px-6 lg:px-8"
      style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
    >
      <div className="max-w-screen-xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="eyebrow block mb-3">STACK</span>
          <p
            style={{
              fontSize: '16px',
              color: 'var(--text-secondary)',
              maxWidth: '520px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}
          >
            Built on the same infrastructure as the companies you trust.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12"
        >
          {stack.map((name) => (
            <span
              key={name}
              style={{
                fontFamily: '"Geist Variable", "Inter", sans-serif',
                fontSize: '15px',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.4)',
                letterSpacing: '-0.01em',
                cursor: 'default',
                transition: 'color 200ms',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,1)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; }}
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
