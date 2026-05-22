import { motion } from 'framer-motion';
import { whatWeDoServices } from '../data/services';

const colorMap = {
  blue: { icon: 'text-blue-400', bg: 'bg-blue-500/10', border: 'hover:border-blue-500/40', glow: 'hover:shadow-blue-500/10' },
  violet: { icon: 'text-violet-400', bg: 'bg-violet-500/10', border: 'hover:border-violet-500/40', glow: 'hover:shadow-violet-500/10' },
  cyan: { icon: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'hover:border-cyan-500/40', glow: 'hover:shadow-cyan-500/10' },
  emerald: { icon: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'hover:border-emerald-500/40', glow: 'hover:shadow-emerald-500/10' },
  orange: { icon: 'text-orange-400', bg: 'bg-orange-500/10', border: 'hover:border-orange-500/40', glow: 'hover:shadow-orange-500/10' },
  pink: { icon: 'text-pink-400', bg: 'bg-pink-500/10', border: 'hover:border-pink-500/40', glow: 'hover:shadow-pink-500/10' },
  amber: { icon: 'text-amber-400', bg: 'bg-amber-500/10', border: 'hover:border-amber-500/40', glow: 'hover:shadow-amber-500/10' },
  yellow: { icon: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'hover:border-yellow-500/40', glow: 'hover:shadow-yellow-500/10' },
  indigo: { icon: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'hover:border-indigo-500/40', glow: 'hover:shadow-indigo-500/10' },
  rose: { icon: 'text-rose-400', bg: 'bg-rose-500/10', border: 'hover:border-rose-500/40', glow: 'hover:shadow-rose-500/10' },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function WhatWeDo() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-navy-800/50 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <div className="section-label">What We Build</div>
          <h2 className="section-title">
            End-to-End Digital{' '}
            <span className="gradient-text">Capabilities</span>
          </h2>
          <p className="section-subtitle">
            From AI assistants to full SaaS platforms — we cover every layer of the digital stack
            your business needs to grow.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
        >
          {whatWeDoServices.map((service, i) => {
            const c = colorMap[service.color] || colorMap.blue;
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -4, scale: 1.01 }}
                className={`glass-card p-5 cursor-default border border-white/[0.07] transition-all duration-300 hover:shadow-xl ${c.border} ${c.glow} group`}
              >
                <div className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={c.icon} size={20} />
                </div>
                <h3 className="text-white text-sm font-semibold mb-2 leading-snug">{service.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-slate-400 text-sm mb-4">
            Not sure what you need? Let's figure it out together.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary text-sm"
          >
            Start a Conversation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
