import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';

const floatVariants = {
  animate: (i) => ({
    y: [0, -24, 0],
    transition: {
      duration: 6 + i * 1.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  }),
};

const stats = [
  { value: '7+', label: 'Platforms Built' },
  { value: '10+', label: 'Service Areas' },
  { value: 'AI', label: 'Core Technology' },
  { value: '∞', label: 'Scale Potential' },
];

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden animated-mesh"
    >
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Floating orbs */}
      <motion.div
        custom={0}
        variants={floatVariants}
        animate="animate"
        className="orb w-96 h-96 bg-blue-600 top-1/4 -left-24 opacity-20"
      />
      <motion.div
        custom={1}
        variants={floatVariants}
        animate="animate"
        className="orb w-80 h-80 bg-violet-600 top-10 right-10 opacity-15"
      />
      <motion.div
        custom={2}
        variants={floatVariants}
        animate="animate"
        className="orb w-64 h-64 bg-cyan-500 bottom-20 right-1/4 opacity-10"
      />
      <motion.div
        custom={3}
        variants={floatVariants}
        animate="animate"
        className="orb w-48 h-48 bg-blue-400 bottom-1/3 left-1/4 opacity-10"
      />

      {/* Glow line top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-blue-500/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase bg-blue-500/10 border border-blue-500/25 text-blue-400 mb-8"
        >
          <Sparkles size={12} className="text-blue-400" />
          AI-Powered Digital Systems
          <Sparkles size={12} className="text-blue-400" />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.08] tracking-tight mb-6"
        >
          We Build{' '}
          <span className="gradient-text">AI-Powered</span>
          <br />
          Digital Systems That
          <br className="hidden sm:block" /> Help Businesses{' '}
          <span className="relative inline-block">
            <span className="gradient-text">Grow.</span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
              className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 origin-left"
            />
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Revenue Engine Limited creates modern apps, marketing platforms, automation systems, and
          digital tools for companies that want better leads, stronger operations, and scalable
          growth.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <button onClick={scrollToProjects} className="btn-primary text-base px-8 py-4">
            View Our Projects
            <ArrowRight size={18} />
          </button>
          <button onClick={scrollToContact} className="btn-secondary text-base px-8 py-4">
            Work With Us
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
        >
          {stats.map((stat, i) => (
            <div key={i} className="glass-card p-4 text-center">
              <div className="text-2xl sm:text-3xl font-black gradient-text mb-1">{stat.value}</div>
              <div className="text-xs text-slate-500 font-medium tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floating abstract card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        custom={1}
        variants={floatVariants}
        className="hidden xl:block absolute right-16 top-1/3 w-72 animate-float"
      >
        <div className="glass-card p-5 glow-border-blue">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-sm">⚡</div>
            <div>
              <div className="text-white text-sm font-semibold">Revenue Engine</div>
              <div className="text-slate-500 text-xs">AI Platform · Active</div>
            </div>
          </div>
          <div className="space-y-2">
            {['Lead Funnels', 'SEO System', 'AI Chatbot', 'CRM Dashboard'].map((f) => (
              <div key={f} className="flex items-center gap-2 text-xs text-slate-400">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                {f}
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center justify-between">
            <span className="text-xs text-slate-500">Status</span>
            <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full">In Development</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="hidden xl:block absolute left-12 bottom-40 w-60 animate-float-slow"
      >
        <div className="glass-card p-4 glow-border-violet">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-600 to-violet-400 flex items-center justify-center text-xs">🎯</div>
            <div className="text-white text-xs font-semibold">FrontOps</div>
          </div>
          <div className="text-xs text-slate-500 mb-3">Operations · Lead Management</div>
          <div className="flex gap-1 flex-wrap">
            {['AI', 'Ops', 'CRM'].map((tag) => (
              <span key={tag} className="text-xs bg-violet-500/10 text-violet-400 border border-violet-500/20 px-2 py-0.5 rounded-full">
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
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={scrollToProjects}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors group"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase font-medium">Explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
}
