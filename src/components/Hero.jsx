import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Calendar } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] },
});

export default function Hero() {
  const [imgOk, setImgOk] = useState(true);
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{ background: 'var(--bg)', paddingTop: '96px', paddingBottom: '80px' }}
    >
      {/* warm radial glow top-right */}
      <div
        aria-hidden="true"
        className="gradient-warm-glow absolute pointer-events-none"
        style={{ width: '900px', height: '700px', top: '-200px', right: '-200px', opacity: 0.4 }}
      />

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 lg:gap-10 items-center">

          {/* LEFT — copy */}
          <div>
            <motion.div {...fadeUp(0)}>
              <span className="eyebrow">REVENUE ENGINE FOR TRADES</span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.08)}
              style={{
                fontFamily: '"Geist Variable", "Inter", sans-serif',
                fontSize: 'clamp(44px, 6.5vw, 80px)',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginTop: '20px',
                marginBottom: '24px',
              }}
            >
              More repeat clients. More referrals. Zero extra work.
            </motion.h1>

            <motion.p
              {...fadeUp(0.16)}
              style={{
                fontSize: '20px',
                lineHeight: 1.55,
                color: 'var(--text-secondary)',
                maxWidth: '560px',
                marginBottom: '36px',
              }}
            >
              Ella is the AI that runs follow-ups, tracks referrals, and wins back old
              clients — automatically. Built for small Canadian businesses who don't
              have time for marketing.
            </motion.p>

            <motion.div
              {...fadeUp(0.24)}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6"
            >
              <button onClick={() => scrollTo('silent-loss-detector')} className="btn-primary">
                See What You're Losing
                <ArrowRight size={16} />
              </button>
              <button onClick={() => scrollTo('voice-demo')} className="btn-secondary">
                Talk to Ella
              </button>
            </motion.div>

            <motion.p
              {...fadeUp(0.3)}
              style={{
                fontFamily: '"Geist Mono Variable", monospace',
                fontSize: '13px',
                color: 'var(--text-muted)',
                letterSpacing: '0.02em',
              }}
            >
              Now onboarding 5 founding clients · Launch pricing
            </motion.p>
          </div>

          {/* RIGHT — Ella portrait + floating cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="relative mx-auto w-full"
            style={{ maxWidth: '420px' }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '4/5',
                borderRadius: '20px',
                overflow: 'hidden',
                background: 'var(--surface-warm)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-lg)',
              }}
            >
              {imgOk ? (
                <img
                  src="/images/ella-hero.png"
                  alt="Ella — your AI revenue assistant"
                  onError={() => setImgOk(false)}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 18%', display: 'block' }}
                />
              ) : (
                <div
                  style={{
                    width: '100%', height: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'linear-gradient(135deg, #F5F0E8 0%, #FFE8D6 100%)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: '"Geist Mono Variable", monospace',
                      fontSize: '15px',
                      letterSpacing: '0.1em',
                      color: 'var(--text-muted)',
                    }}
                  >
                    ELLA HERO
                  </span>
                </div>
              )}

              {/* Name caption */}
              <div
                style={{
                  position: 'absolute', left: 0, right: 0, bottom: 0,
                  padding: '40px 20px 18px',
                  background: 'linear-gradient(to top, rgba(26,26,26,0.78), rgba(26,26,26,0))',
                }}
              >
                <div style={{ fontFamily: '"Geist Variable", "Inter", sans-serif', fontSize: '18px', fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>
                  Meet Ella.
                </div>
                <div style={{ fontFamily: '"Geist Mono Variable", monospace', fontSize: '12px', letterSpacing: '0.04em', color: 'rgba(255,255,255,0.85)', marginTop: '2px' }}>
                  Your AI revenue assistant
                </div>
              </div>
            </div>

            {/* Floating product cards — hidden on mobile */}
            <FloatCard
              className="float-a hidden md:flex"
              style={{ top: '-18px', right: '-26px' }}
              icon={<MessageSquare size={15} style={{ color: 'var(--accent)' }} />}
              title="5-star review posted"
              meta="Day 7 · auto"
            />
            <FloatCard
              className="float-b hidden md:flex"
              style={{ bottom: '60px', left: '-40px' }}
              icon={<Calendar size={15} style={{ color: 'var(--accent-secondary)' }} />}
              title="Referral booked"
              meta="+$50 reward"
            />
            <FloatCard
              className="float-c hidden md:flex"
              style={{ top: '46%', right: '-46px' }}
              icon={<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--success)', display: 'inline-block' }} />}
              title="Win-back replied"
              meta="9 mo · re-engaged"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FloatCard({ className, style, icon, title, meta }) {
  return (
    <div
      className={className}
      style={{
        position: 'absolute',
        alignItems: 'center',
        gap: '10px',
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        padding: '12px 16px',
        boxShadow: 'var(--shadow-md)',
        zIndex: 20,
        ...style,
      }}
    >
      <span
        style={{
          width: '30px', height: '30px', borderRadius: '8px',
          background: 'var(--surface-warm)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        {icon}
      </span>
      <div style={{ textAlign: 'left', whiteSpace: 'nowrap' }}>
        <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.2 }}>
          {title}
        </div>
        <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: '"Geist Mono Variable", monospace' }}>
          {meta}
        </div>
      </div>
    </div>
  );
}
