import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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
      {/* Vibrant background orbs */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="mesh-blob orb-vibrant"
          style={{
            position: 'absolute',
            width: '640px',
            height: '640px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(91,108,255,0.55) 0%, rgba(255,79,157,0.3) 45%, transparent 70%)',
            filter: 'blur(80px)',
            top: '5%',
            left: '25%',
            transform: 'translate(-50%, 0)',
            animationName: 'orb-drift-a',
            animationDuration: '15s',
            opacity: 0.65,
          }}
        />
        <div
          className="mesh-blob orb-vibrant"
          style={{
            position: 'absolute',
            width: '520px',
            height: '520px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,212,255,0.45) 0%, rgba(91,108,255,0.3) 55%, transparent 75%)',
            filter: 'blur(80px)',
            top: '55%',
            right: '-5%',
            animationName: 'orb-drift-b',
            animationDuration: '20s',
            opacity: 0.55,
          }}
        />
        <div
          className="mesh-blob orb-vibrant"
          style={{
            position: 'absolute',
            width: '360px',
            height: '360px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,181,71,0.25) 0%, transparent 65%)',
            filter: 'blur(60px)',
            bottom: '15%',
            left: '5%',
            animationName: 'orb-drift-c',
            animationDuration: '25s',
            opacity: 0.45,
          }}
        />
      </div>

      {/* Hairline top border */}
      <div
        className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, var(--border), transparent)' }}
      />

      <div className="relative z-10 max-w-hero mx-auto px-6 text-center pt-28 pb-20 w-full">

        {/* Pill badge */}
        <motion.div {...fadeUp(0)} className="flex justify-center mb-6">
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '999px',
              background: 'linear-gradient(135deg, rgba(91,108,255,0.14) 0%, rgba(255,79,157,0.14) 100%)',
              border: '1px solid rgba(255,255,255,0.1)',
              fontSize: '12px',
              fontFamily: '"Geist Mono Variable", monospace',
              fontWeight: 600,
              letterSpacing: '0.08em',
              color: 'rgba(255,255,255,0.65)',
            }}
          >
            <span
              className="mesh-blob"
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: 'var(--accent-lime)',
                display: 'inline-block',
                flexShrink: 0,
                animationName: 'badge-pulse',
                animationDuration: '2s',
              }}
            />
            NEW · AI STUDIO 2026
          </span>
        </motion.div>

        {/* Eyebrow */}
        <motion.div {...fadeUp(0.06)}>
          <span className="eyebrow">REVENUE ENGINE LTD / AI STUDIO</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.12)}
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
          {...fadeUp(0.28)}
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
        <motion.p {...fadeUp(0.36)} className="eyebrow">
          Now accepting first 5 partner clients at launch pricing.
        </motion.p>
      </div>
    </section>
  );
}
