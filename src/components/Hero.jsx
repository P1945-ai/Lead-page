import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles, TrendingUp, Zap, Bot } from 'lucide-react';

const floatVariants = {
  animate: (i) => ({
    y: [0, -20, 0],
    transition: {
      duration: 7 + i * 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  }),
};

const stats = [
  { value: '7+', label: 'Platforms Built' },
  { value: 'AI-First', label: 'Engineering' },
  { value: 'MVP-Fast', label: 'Delivery' },
  { value: 'Full-Stack', label: 'Capability' },
];

export default function Hero() {
  const scrollToProjects = () =>
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden animated-mesh"
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Floating orbs */}
      <motion.div
        custom={0}
        variants={floatVariants}
        animate="animate"
        className="orb w-[500px] h-[500px] bg-blue-700 top-0 -left-40 opacity-[0.12]"
      />
      <motion.div
        custom={1}
        variants={floatVariants}
        animate="animate"
        className="orb w-[400px] h-[400px] bg-violet-700 top-10 right-0 opacity-[0.10]"
      />
      <motion.div
        custom={2}
        variants={floatVariants}
        animate="animate"
        className="orb w-72 h-72 bg-cyan-600 bottom-20 right-1/4 opacity-[0.08]"
      />

      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] bg-blue-900/20 pointer-events-none" />

      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-36 bg-gradient-to-b from-blue-500/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 sm:pt-32 pb-16 sm:pb-20 w-full">

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
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[2.4rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6"
        >
          We Build{' '}
          <span className="gradient-text">AI-Powered</span>
          <br />
          <span className="text-white">Digital Systems That</span>
          <br />
          <span className="text-white">Help Businesses </span>
          <span className="relative inline-block">
            <span className="gradient-text">Grow.</span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.95, ease: 'easeOut' }}
              className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 origin-left"
            />
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Revenue Engine Limited creates apps, marketing platforms, automation systems, and SaaS
          tools for companies that want better leads, stronger operations, and scalable growth.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-16 sm:mb-20 max-w-sm sm:max-w-none mx-auto"
        >
          <button
            onClick={scrollToProjects}
            className="btn-primary text-base px-8 py-4 min-h-[52px]"
          >
            View Our Projects
            <ArrowRight size={18} />
          </button>
          <button
            onClick={scrollToContact}
            className="btn-secondary text-base px-8 py-4 min-h-[52px]"
          >
            Work With Us
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-xl mx-auto"
        >
          {stats.map((stat, i) => (
            <div key={i} className="glass-card p-3.5 sm:p-4 text-center">
              <div className="text-xl sm:text-2xl font-black gradient-text mb-1 leading-none">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs text-slate-500 font-medium tracking-wide leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floating preview cards — desktop only */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.9 }}
        custom={0}
        variants={floatVariants}
        className="hidden xl:block absolute right-10 top-[30%] w-68"
        style={{ width: '272px' }}
      >
        <div className="glass-card p-5 glow-border-blue">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center flex-shrink-0">
              <Zap size={15} className="text-white" />
            </div>
            <div className="min-w-0">
              <div className="text-white text-sm font-semibold truncate">Revenue Engine</div>
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
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 1.1 }}
        custom={2}
        variants={floatVariants}
        className="hidden xl:block absolute left-10 bottom-44"
        style={{ width: '224px' }}
      >
        <div className="glass-card p-4 glow-border-violet">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-600 to-violet-400 flex items-center justify-center flex-shrink-0">
              <Bot size={13} className="text-white" />
            </div>
            <div>
              <div className="text-white text-xs font-semibold">FrontOps</div>
              <div className="text-slate-600 text-[10px]">Operations Platform</div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 mb-2">
            <TrendingUp size={12} className="text-emerald-400" />
            <span className="text-xs text-emerald-400 font-medium">+34% lead capture</span>
          </div>
          <div className="flex gap-1.5 flex-wrap">
            {['AI', 'CRM', 'Ops', 'Auto'].map((tag) => (
              <span
                key={tag}
                className="text-[10px] bg-violet-500/10 text-violet-400 border border-violet-500/20 px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        onClick={scrollToProjects}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-500 hover:text-slate-300 transition-colors"
        aria-label="Scroll to projects"
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
