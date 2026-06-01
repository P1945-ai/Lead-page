import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { OmadIllustration, RoadReadyIllustration, LocalBoostIllustration } from './visuals/CaseIllustrations';

const work = [
  {
    slug: 'omad',
    Illustration: OmadIllustration,
    eyebrow: 'ENTERPRISE · CROSS-BORDER TRADE',
    title: 'OMAD International',
    desc: 'Digital infrastructure for Central Asia–Canada critical-minerals trade.',
  },
  {
    slug: 'road-ready',
    Illustration: RoadReadyIllustration,
    eyebrow: 'PREMIUM SERVICE BUSINESS',
    title: 'Road Ready',
    desc: 'Dark-luxury detailing site built for high-trust aviation clients.',
  },
  {
    slug: 'localboost',
    Illustration: LocalBoostIllustration,
    eyebrow: 'AI PLATFORM · LEAD GEN',
    title: 'LocalBoost',
    desc: 'AI visibility platform that audits and ranks local service businesses.',
  },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } };
const cardAnim = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } } };

export default function FeaturedWork() {
  return (
    <section id="work" className="relative py-20 sm:py-30 px-6 lg:px-8 section-top-divider" style={{ background: 'var(--surface-warm)' }}>
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <span className="section-label">FEATURED WORK</span>
          <h2 className="section-title">Real builds. Real businesses.</h2>
          <p className="section-subtitle">
            From Toronto small businesses to international trade infrastructure — every
            system reflects operator-level thinking.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {work.map(({ slug, Illustration, eyebrow, title, desc }) => (
            <motion.div key={slug} variants={cardAnim}>
              <Link
                to={`/work/${slug}`}
                className="group block"
                style={{
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: '8px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)',
                  textDecoration: 'none', height: '100%',
                  display: 'flex', flexDirection: 'column',
                  transition: 'box-shadow 200ms, transform 200ms',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ aspectRatio: '16/10', position: 'relative' }}>
                  <Illustration />
                </div>
                <div style={{ padding: '22px' }}>
                  <span style={{ fontFamily: '"Geist Mono Variable", monospace', fontSize: '11px', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>
                    {eyebrow}
                  </span>
                  <h3 style={{ fontFamily: '"Geist Variable", sans-serif', fontSize: '22px', fontWeight: 700, letterSpacing: '-0.01em', color: 'var(--text-primary)', margin: '8px 0 8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    {title}
                    <ArrowUpRight size={18} style={{ color: 'var(--accent)' }} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.55, color: 'var(--text-secondary)' }}>{desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
          style={{ marginTop: '40px', fontSize: '15px', color: 'var(--text-secondary)' }}
        >
          <Link to="/work" style={{ color: 'var(--accent)', fontWeight: 600, textDecoration: 'none' }}>
            See all work →
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
