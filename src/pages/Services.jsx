import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import useSEO from '../lib/useSEO';
import ServiceIcon from '../components/visuals/ServiceIcon';
import VoiceWaveform from '../components/visuals/VoiceWaveform';
import { useGoToSection } from '../components/site/CTAButtons';

const services = [
  { icon: 'voice', to: '/services/voice-agents', name: 'AI Voice Agents', desc: 'Ella answers every call 24/7 — qualifying leads and booking jobs.', accent: 'var(--accent)', flagship: true },
  { icon: 'followup', to: '/services/follow-up-machine', name: 'Follow-Up Machine', desc: 'Automated thank-yous, review requests, and 90-day re-engagement.', accent: 'var(--accent)' },
  { icon: 'referral', to: '/services/referral-tracker', name: 'Referral Tracker', desc: 'Unique codes and automatic rewards that turn word-of-mouth into revenue.', accent: '#5B6CFF' },
  { icon: 'winback', to: '/services/win-back', name: 'Win-Back Campaign', desc: 'Reactivate dormant clients with AI-personalized outreach.', accent: '#10B981' },
  { icon: 'custom', to: '/services/custom-builds', name: 'Custom AI Apps & SaaS', desc: 'Production-ready custom software, shipped in weeks. You own the IP.', accent: '#5B6CFF' },
  { icon: 'video', to: '/services/video-creation', name: 'AI Video Creation', desc: 'Studio-quality branded AI video at a fraction of the cost.', accent: 'var(--accent)' },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const cardAnim = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } } };

export default function Services() {
  useSEO({ title: 'Services', description: 'Six AI-powered systems for Canadian trades: voice agents, follow-ups, referrals, win-backs, custom builds, and AI video.' });
  const go = useGoToSection();

  return (
    <>
      <section className="relative overflow-hidden px-6 lg:px-8" style={{ background: 'var(--bg)', paddingTop: '88px', paddingBottom: '40px' }}>
        <div className="max-w-screen-xl mx-auto text-center">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="eyebrow">
            WHAT WE BUILD
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }}
            style={{ fontFamily: '"Geist Variable", sans-serif', fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: 1.05, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-primary)', margin: '16px auto 18px', maxWidth: '900px' }}
          >
            Revenue systems, installed.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.16 }}
            style={{ fontSize: '19px', lineHeight: 1.5, color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}
          >
            Each one runs automatically, powered by Ella. Pick the engine you need — or stack them.
          </motion.p>
        </div>
      </section>

      <section className="px-6 lg:px-8 pb-20" style={{ background: 'var(--bg)' }}>
        <motion.div
          variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-40px' }}
          className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((s) => (
            <motion.div key={s.to} variants={cardAnim}>
              <Link
                to={s.to}
                className="group block h-full"
                style={{
                  position: 'relative', background: 'var(--surface)',
                  border: s.flagship ? `1.5px solid ${s.accent}` : '1px solid var(--border)',
                  borderRadius: '8px', padding: '32px', textDecoration: 'none',
                  boxShadow: 'var(--shadow-sm)', transition: 'box-shadow 200ms, transform 200ms',
                  display: 'flex', flexDirection: 'column', minHeight: '220px',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                {s.flagship && (
                  <span style={{ position: 'absolute', top: '20px', right: '20px', fontFamily: '"Geist Mono Variable", monospace', fontSize: '10px', letterSpacing: '0.1em', color: s.accent, border: `1px solid ${s.accent}`, borderRadius: '999px', padding: '3px 9px' }}>
                    FLAGSHIP
                  </span>
                )}
                <span style={{ width: '56px', height: '56px', borderRadius: '14px', background: `color-mix(in srgb, ${s.accent} 12%, transparent)`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '22px' }}>
                  <ServiceIcon name={s.icon} size={32} color={s.accent} />
                </span>
                <h3 style={{ fontFamily: '"Geist Variable", sans-serif', fontSize: '22px', fontWeight: 700, letterSpacing: '-0.01em', color: 'var(--text-primary)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  {s.name}
                  <ArrowUpRight size={18} style={{ color: s.accent }} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </h3>
                <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--text-secondary)' }}>{s.desc}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Talk to Ella CTA */}
      <section className="px-6 lg:px-8 py-20" style={{ background: 'var(--surface-warm)' }}>
        <div className="max-w-screen-xl mx-auto text-center">
          <div style={{ maxWidth: '320px', margin: '0 auto 24px' }}>
            <VoiceWaveform bars={28} height={60} />
          </div>
          <h2 style={{ fontFamily: '"Geist Variable", sans-serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text-primary)', marginBottom: '12px' }}>
            Not sure which fits?
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)', marginBottom: '28px' }}>
            Talk to Ella for 60 seconds — she’ll point you to the right engine.
          </p>
          <div className="flex justify-center">
            <button onClick={() => go('voice-demo')} className="btn-primary" style={{ padding: '14px 30px', fontSize: '16px' }}>
              Talk to Ella
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
