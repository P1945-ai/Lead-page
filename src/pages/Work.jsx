import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import useSEO from '../lib/useSEO';
import { OmadIllustration, RoadReadyIllustration, LocalBoostIllustration } from '../components/visuals/CaseIllustrations';

const work = [
  { slug: 'omad', Illustration: OmadIllustration, eyebrow: 'ENTERPRISE · CROSS-BORDER TRADE', title: 'OMAD International', desc: 'Digital infrastructure for Central Asia–Canada critical-minerals trade — brand, website, briefings, and conference collateral.' },
  { slug: 'road-ready', Illustration: RoadReadyIllustration, eyebrow: 'PREMIUM SERVICE BUSINESS', title: 'Road Ready', desc: 'A dark-luxury detailing site built to convert high-trust private-aviation clients across the GTA.' },
  { slug: 'localboost', Illustration: LocalBoostIllustration, eyebrow: 'AI PLATFORM · LEAD GENERATION', title: 'LocalBoost', desc: 'An AI-powered visibility platform that audits local businesses and captures qualified leads.' },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const cardAnim = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } } };

export default function Work() {
  useSEO({ title: 'Work', description: 'Real builds for real businesses — from international trade infrastructure to AI lead-generation platforms.' });

  return (
    <>
      <section className="px-6 lg:px-8" style={{ background: 'var(--bg)', paddingTop: '88px', paddingBottom: '48px' }}>
        <div className="max-w-screen-xl mx-auto text-center">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="eyebrow">
            SELECTED WORK
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }}
            style={{ fontFamily: '"Geist Variable", sans-serif', fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: 1.05, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-primary)', margin: '16px auto 18px', maxWidth: '900px' }}
          >
            Real builds. Real businesses. Real revenue.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.16 }}
            style={{ fontSize: '19px', lineHeight: 1.5, color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto' }}
          >
            From Toronto small businesses to international trade infrastructure — every system we ship reflects operator-level thinking.
          </motion.p>
        </div>
      </section>

      <section className="px-6 lg:px-8 pb-12" style={{ background: 'var(--bg)' }}>
        <motion.div
          variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-40px' }}
          className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {work.map(({ slug, Illustration, eyebrow, title, desc }) => (
            <motion.div key={slug} variants={cardAnim}>
              <Link
                to={`/work/${slug}`}
                className="group block h-full"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', textDecoration: 'none', display: 'flex', flexDirection: 'column', transition: 'box-shadow 200ms, transform 200ms' }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ aspectRatio: '16/10' }}><Illustration /></div>
                <div style={{ padding: '24px' }}>
                  <span style={{ fontFamily: '"Geist Mono Variable", monospace', fontSize: '11px', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>{eyebrow}</span>
                  <h3 style={{ fontFamily: '"Geist Variable", sans-serif', fontSize: '23px', fontWeight: 700, letterSpacing: '-0.01em', color: 'var(--text-primary)', margin: '8px 0 8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    {title}
                    <ArrowUpRight size={18} style={{ color: 'var(--accent)' }} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.55, color: 'var(--text-secondary)' }}>{desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="px-6 lg:px-8 pb-24" style={{ background: 'var(--bg)' }}>
        <p className="max-w-screen-xl mx-auto text-center" style={{ fontFamily: '"Geist Variable", sans-serif', fontSize: 'clamp(20px, 2.6vw, 28px)', fontWeight: 600, letterSpacing: '-0.01em', color: 'var(--text-primary)', maxWidth: '640px' }}>
          We work with a small number of clients at a time, intentionally.
        </p>
      </section>
    </>
  );
}
