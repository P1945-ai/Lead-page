import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import MatrixRain from './MatrixRain';

const floatA = {
  animate: { y: [0, -18, 0], transition: { duration: 7, repeat: Infinity, ease: 'easeInOut' } },
};
const floatB = {
  animate: { y: [0, -12, 0], transition: { duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.5 } },
};

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#06060F' }}
    >
      {/* ── Background layers (bottom → top) ── */}

      {/* 1. Radial mesh */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 15% 45%, rgba(59,130,246,0.16) 0%, transparent 55%),' +
            'radial-gradient(ellipse at 85% 15%, rgba(124,58,237,0.13) 0%, transparent 50%),' +
            'radial-gradient(ellipse at 50% 90%, rgba(6,182,212,0.07) 0%, transparent 50%)',
        }}
      />

      {/* 2. Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      {/* 3. Matrix Rain canvas — the star of the show */}
      <MatrixRain />

      {/* 4. Floating orbs (above rain so they glow through) */}
      <motion.div
        animate={{ opacity: [0.12, 0.18, 0.12] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="orb w-[480px] h-[480px] bg-blue-700 top-0 -left-32 opacity-[0.14]"
      />
      <motion.div
        animate={{ opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="orb w-[380px] h-[380px] bg-violet-700 top-10 -right-10 opacity-[0.10]"
      />

      {/* 5. Vignette — keeps text readable over the rain */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(6,6,15,0.65) 100%)',
        }}
      />

      {/* Top beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-36 bg-gradient-to-b from-blue-500/60 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-44 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent pointer-events-none" />

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 sm:pt-32 pb-16 w-full">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-8"
        >
          <Sparkles size={12} />
          AI-Powered Digital Systems
          <Sparkles size={12} />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.23, 1, 0.32, 1] }}
          className="text-[2.4rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6"
        >
          We Build{' '}
          <span className="gradient-text">AI-Powered</span>
          <br />
          Digital Systems That
          <br />
          Help Businesses{' '}
          <span className="relative inline-block">
            <span className="gradient-text">Grow.</span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 1.0, ease: [0.23, 1, 0.32, 1] }}
              className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 origin-left"
            />
          </span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: 'easeOut' }}
          className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Revenue Engine Limited creates apps, marketing platforms, automation systems, and SaaS
          tools for companies that want better leads, stronger operations, and scalable growth.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-16 max-w-sm sm:max-w-none mx-auto"
        >
          <button
            onClick={() => scrollTo('projects')}
            className="btn-primary text-base px-8 py-4 min-h-[52px]"
          >
            View Our Projects
            <ArrowRight size={18} />
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="btn-secondary text-base px-8 py-4 min-h-[52px]"
          >
            Work With Us
          </button>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.58, ease: 'easeOut' }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto"
        >
          {[
            { value: '7+',         label: 'Platforms Built' },
            { value: 'AI-Native',  label: 'Engineering' },
            { value: 'Weeks',      label: 'Concept to MVP' },
            { value: 'Full-Stack', label: 'Capability' },
          ].map((s, i) => (
            <div key={i} className="glass-card p-3.5 text-center border border-white/[0.07]">
              <div className="text-xl font-black gradient-text mb-0.5 leading-none">{s.value}</div>
              <div className="text-[10px] text-slate-500 font-medium tracking-wide">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Floating preview cards (xl only) ── */}
      <motion.div
        initial={{ opacity: 0, x: 32 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        variants={floatA}
        className="hidden xl:block absolute right-10 top-[30%]"
        style={{ width: 260 }}
      >
        <div className="glass-card p-5 glow-border-blue animate-float">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="min-w-0">
              <div className="text-white text-sm font-semibold">Revenue Engine</div>
              <div className="text-slate-500 text-xs">AI Marketing Platform</div>
            </div>
          </div>
          <div className="space-y-2 mb-4">
            {['Automated Lead Funnels', 'Local SEO System', 'AI Chatbot', 'CRM Dashboard'].map((f) => (
              <div key={f} className="flex items-center gap-2 text-xs text-slate-400">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                {f}
              </div>
            ))}
          </div>
          <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
            <span className="text-xs text-slate-600">Status</span>
            <span className="text-[11px] font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-full">
              In Development
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -32 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="hidden xl:block absolute left-10 bottom-44 animate-float-slow"
        style={{ width: 220 }}
      >
        <div className="glass-card p-4 glow-border-violet">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-600 to-violet-400 flex items-center justify-center flex-shrink-0 shadow-lg shadow-violet-500/30">
              <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
              </svg>
            </div>
            <div>
              <div className="text-white text-xs font-semibold">FrontOps</div>
              <div className="text-slate-600 text-[10px]">Operations Platform</div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 mb-2.5">
            <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" d="M5 12h14M13 6l6 6-6 6" />
            </svg>
            <span className="text-xs text-emerald-400 font-semibold">+34% lead capture</span>
          </div>
          <div className="flex gap-1.5 flex-wrap">
            {['AI', 'CRM', 'Ops', 'Auto'].map((t) => (
              <span key={t} className="text-[10px] bg-violet-500/10 text-violet-400 border border-violet-500/20 px-2 py-0.5 rounded-full">
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        onClick={() => scrollTo('stats')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-500 hover:text-slate-300 transition-colors z-10"
        aria-label="Scroll down"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Explore</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
