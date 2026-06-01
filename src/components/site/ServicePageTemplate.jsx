import { motion } from 'framer-motion';
import useSEO from '../../lib/useSEO';
import Section, { Reveal } from './Section';
import CTAButtons from './CTAButtons';
import Chips from './Chips';
import FAQAccordion from './FAQAccordion';
import StatCounter from '../visuals/StatCounter';
import ProcessFlow from '../visuals/ProcessFlow';

/**
 * ServicePageTemplate — the shared layout every service page follows (A–I).
 * Driven entirely by a `data` object + a `heroVisual` and `demo` node.
 */
export default function ServicePageTemplate({ data }) {
  const accent = data.accent || 'var(--accent)';
  useSEO(data.seo);

  return (
    <>
      {/* A. HERO */}
      <section className="relative overflow-hidden" style={{ background: 'var(--bg)', paddingTop: '72px', paddingBottom: '64px' }}>
        <div aria-hidden="true" className="absolute pointer-events-none" style={{
          width: '760px', height: '600px', top: '-220px', right: '-160px', opacity: 0.5,
          background: `radial-gradient(circle, color-mix(in srgb, ${accent} 22%, transparent) 0%, transparent 60%)`,
          filter: 'blur(20px)',
        }} />
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="eyebrow" style={{ color: accent }}>
                {data.hero.eyebrow}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }}
                style={{ fontFamily: '"Geist Variable", "Inter", sans-serif', fontSize: 'clamp(38px, 5.4vw, 64px)', lineHeight: 1.06, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-primary)', margin: '18px 0 20px' }}
              >
                {data.hero.headline}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.16 }}
                style={{ fontSize: '19px', lineHeight: 1.55, color: 'var(--text-secondary)', maxWidth: '520px', marginBottom: '32px' }}
              >
                {data.hero.subhead}
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.24 }}>
                <CTAButtons primaryLabel={data.hero.primaryLabel || 'Book a call'} />
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
              {data.heroVisual}
            </motion.div>
          </div>
        </div>
      </section>

      {/* B. THE PROBLEM */}
      <Section bg="var(--surface-warm)" eyebrow="THE PROBLEM" title={data.problem.title} divider>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {data.problem.points.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', padding: '28px', height: '100%' }}>
                <ProblemIcon accent={accent} />
                <h3 style={{ fontFamily: '"Geist Variable", sans-serif', fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)', margin: '16px 0 8px' }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--text-secondary)' }}>{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* C. HOW IT WORKS */}
      <Section eyebrow="HOW IT WORKS" title={data.process.title} maxWidth="1080px">
        <ProcessFlow steps={data.process.steps} accent={accent} />
      </Section>

      {/* D. WHAT'S INCLUDED */}
      <Section bg="var(--surface-warm)" eyebrow="WHAT'S INCLUDED" title={data.included.title} divider>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1" style={{ maxWidth: '860px', margin: '0 auto' }}>
          {data.included.items.map((item, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '14px 0', borderBottom: '1px solid var(--border)' }}>
                <CheckMark accent={accent} />
                <span style={{ fontSize: '16px', lineHeight: 1.5, color: 'var(--text-primary)' }}>{item}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* E. LIVE VISUAL DEMO */}
      <Section eyebrow="LIVE DEMO" title={data.demo.title} subtitle={data.demo.subhead} maxWidth="940px">
        <Reveal>{data.demo.node}</Reveal>
      </Section>

      {/* F. INDUSTRIES IT FITS */}
      <Section bg="var(--surface-warm)" eyebrow="WHO IT FITS" title={data.industries.title} maxWidth="900px" divider>
        <Chips items={data.industries.chips} accent={accent} />
      </Section>

      {/* G. REAL RESULTS */}
      <Section eyebrow="REAL RESULTS" title={data.results.title} maxWidth="1000px">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div style={{ fontSize: '17px', lineHeight: 1.75, color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left' }}>
            {(Array.isArray(data.results.narrative) ? data.results.narrative : [data.results.narrative]).map((para, i) => (
              <Reveal key={i} delay={i * 0.06}><p>{para}</p></Reveal>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-8">
            {data.results.stats.map((s) => (
              <StatCounter key={s.label} {...s} color={accent} />
            ))}
          </div>
        </div>
      </Section>

      {/* H. FAQ */}
      <Section bg="var(--surface-warm)" eyebrow="FAQ" title="Questions, answered." divider>
        <FAQAccordion items={data.faq} />
      </Section>

      {/* I. FINAL CTA */}
      <section className="relative py-24 px-6 lg:px-8 overflow-hidden" style={{ background: 'var(--bg)' }}>
        <div aria-hidden="true" className="absolute pointer-events-none" style={{
          width: '700px', height: '500px', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', opacity: 0.5,
          background: `radial-gradient(circle, color-mix(in srgb, ${accent} 18%, transparent) 0%, transparent 60%)`, filter: 'blur(20px)',
        }} />
        <div className="relative z-10 text-center mx-auto" style={{ maxWidth: '640px' }}>
          <Reveal>
            <h2 style={{ fontFamily: '"Geist Variable", sans-serif', fontSize: 'clamp(32px, 4.5vw, 52px)', lineHeight: 1.1, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
              {data.finalCTA.headline}
            </h2>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', marginBottom: '32px' }}>{data.finalCTA.sub}</p>
            <div className="flex justify-center">
              <CTAButtons center />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ProblemIcon({ accent }) {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke={accent} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="18" cy="18" r="14" strokeOpacity="0.3" />
      <line x1="18" y1="11" x2="18" y2="19" />
      <circle cx="18" cy="24" r="0.5" fill={accent} stroke={accent} strokeWidth="2" />
    </svg>
  );
}

function CheckMark({ accent }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" style={{ flexShrink: 0, marginTop: '1px' }} aria-hidden="true">
      <circle cx="11" cy="11" r="11" fill={`color-mix(in srgb, ${accent} 14%, transparent)`} />
      <path d="M6.5 11.2l3 3 6-6.4" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}
