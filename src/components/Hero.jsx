import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import MeshGradient from './MeshGradient';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] },
});

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      <MeshGradient />

      {/* Hairline top border */}
      <div
        className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, var(--border), transparent)' }}
      />

      <div className="relative z-10 max-w-hero mx-auto px-6 text-center pt-28 pb-20 w-full">

        {/* Eyebrow */}
        <motion.div {...fadeUp(0)}>
          <span className="eyebrow">REVENUE ENGINE LTD / AI STUDIO</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.1)}
          style={{
            fontFamily: '"Geist Variable", "Inter", sans-serif',
            fontSize: 'clamp(40px, 7vw, 72px)',
            lineHeight: '1.08',
            letterSpacing: '-0.02em',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginTop: '24px',
            marginBottom: '24px',
          }}
        >
          We build AI systems that<br />
          run your business.
        </motion.h1>

        {/* Subhead */}
        <motion.p
          {...fadeUp(0.2)}
          style={{
            fontSize: '18px',
            lineHeight: '1.6',
            color: 'var(--text-secondary)',
            maxWidth: '580px',
            margin: '0 auto 36px',
          }}
        >
          Custom AI agents, automation, and growth platforms for founders
          who want leverage — not headcount.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8"
        >
          <button
            onClick={() => scrollTo('contact')}
            className="btn-primary"
            style={{ padding: '12px 24px', fontSize: '15px' }}
          >
            Book intro call
            <ArrowRight size={15} />
          </button>
          <button
            onClick={() => scrollTo('projects')}
            className="btn-secondary"
            style={{ padding: '12px 24px', fontSize: '15px' }}
          >
            See our work
          </button>
        </motion.div>

        {/* Launch copy */}
        <motion.p {...fadeUp(0.4)} className="eyebrow">
          Now accepting first 5 partner clients at launch pricing.
        </motion.p>
      </div>
    </section>
  );
}
