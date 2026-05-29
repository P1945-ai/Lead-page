import { motion } from 'framer-motion';
import {
  siAnthropic,
  siElevenlabs,
  siStripe,
  siVercel,
  siMongodb,
} from 'simple-icons';

// OpenAI was removed from simple-icons v16; hardcoded official brandmark path.
const siOpenai = {
  title: 'OpenAI',
  hex: '412991',
  path: 'M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z',
};

// SVG-backed brands (icon shown)
const svgBrands = [
  { icon: siOpenai,     name: 'OpenAI',     hoverColor: '#10A37F' },
  { icon: siAnthropic,  name: 'Anthropic',  hoverColor: '#D97757' },
  { icon: siElevenlabs, name: 'ElevenLabs', hoverColor: '#1A1A1A', highlight: true },
  { icon: siStripe,     name: 'Stripe',     hoverColor: `#${siStripe.hex}` },
  { icon: siVercel,     name: 'Vercel',     hoverColor: '#1A1A1A' },
  { icon: siMongodb,    name: 'MongoDB',    hoverColor: `#${siMongodb.hex}` },
];

// Wordmark brands (not in simple-icons; clean styled text instead of incorrect SVG)
const wordmarkBrands = [
  { name: 'Bland.ai', hoverColor: '#1A1A1A' },
  { name: 'Vapi',     hoverColor: '#16A34A' },
  { name: 'Lindy',    hoverColor: '#FF6B35' },
];

const GREY = '#8A8580';

function SvgLogo({ icon, name, hoverColor, highlight }) {
  return (
    <div className="flex flex-col items-center gap-2" title={name}>
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '26px', height: '26px', fill: GREY, transition: 'fill 200ms ease' }}
        onMouseEnter={(e) => { e.currentTarget.style.fill = hoverColor; }}
        onMouseLeave={(e) => { e.currentTarget.style.fill = GREY; }}
        role="img"
        aria-label={name}
      >
        <path d={icon.path} />
      </svg>
      <span
        style={{
          fontFamily: '"Geist Mono Variable", monospace',
          fontSize: '10px',
          fontWeight: 600,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: highlight ? 'var(--accent)' : GREY,
          userSelect: 'none',
        }}
      >
        {name}
      </span>
    </div>
  );
}

function WordmarkLogo({ name, hoverColor }) {
  return (
    <span
      title={name}
      style={{
        fontFamily: '"Geist Variable", "Inter", sans-serif',
        fontSize: '20px',
        fontWeight: 700,
        letterSpacing: '-0.01em',
        color: GREY,
        cursor: 'default',
        transition: 'color 200ms ease',
        alignSelf: 'center',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.color = hoverColor; }}
      onMouseLeave={(e) => { e.currentTarget.style.color = GREY; }}
    >
      {name}
    </span>
  );
}

export default function TrustBar() {
  return (
    <section className="relative py-16 px-6 lg:px-8 section-top-divider" style={{ background: 'var(--bg)' }}>
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="section-label">POWERED BY</span>
          <h2
            style={{
              fontFamily: '"Geist Variable", "Inter", sans-serif',
              fontSize: 'clamp(24px, 3.5vw, 32px)',
              lineHeight: 1.2,
              letterSpacing: '-0.01em',
              fontWeight: 700,
              color: 'var(--text-primary)',
              maxWidth: '560px',
              margin: '0 auto',
            }}
          >
            Built on the AI infrastructure you already trust.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-14"
        >
          {svgBrands.map((b) => (
            <SvgLogo key={b.name} {...b} />
          ))}
          {wordmarkBrands.map((b) => (
            <WordmarkLogo key={b.name} {...b} />
          ))}
        </motion.div>

        <p
          className="text-center mt-12"
          style={{
            fontFamily: '"Geist Mono Variable", monospace',
            fontSize: '13px',
            color: 'var(--text-muted)',
            maxWidth: '620px',
            margin: '48px auto 0',
            lineHeight: 1.6,
          }}
        >
          We integrate, customize, and operate best-in-class AI tools — so you don't have to
          figure out what to use.
        </p>
      </div>
    </section>
  );
}
