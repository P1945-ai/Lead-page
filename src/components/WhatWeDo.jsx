import { motion } from 'framer-motion';
import { whatWeDoServices } from '../data/services';

const colorMap = {
  blue:    { icon: 'text-blue-400',    bg: 'bg-blue-500/10',    border: 'hover:border-blue-500/40'   },
  violet:  { icon: 'text-violet-400',  bg: 'bg-violet-500/10',  border: 'hover:border-violet-500/40' },
  cyan:    { icon: 'text-cyan-400',    bg: 'bg-cyan-500/10',    border: 'hover:border-cyan-500/40'   },
  emerald: { icon: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'hover:border-emerald-500/40'},
  orange:  { icon: 'text-orange-400',  bg: 'bg-orange-500/10',  border: 'hover:border-orange-500/40' },
  pink:    { icon: 'text-pink-400',    bg: 'bg-pink-500/10',    border: 'hover:border-pink-500/40'   },
  amber:   { icon: 'text-amber-400',   bg: 'bg-amber-500/10',   border: 'hover:border-amber-500/40'  },
  yellow:  { icon: 'text-yellow-400',  bg: 'bg-yellow-500/10',  border: 'hover:border-yellow-500/40' },
  indigo:  { icon: 'text-indigo-400',  bg: 'bg-indigo-500/10',  border: 'hover:border-indigo-500/40' },
  rose:    { icon: 'text-rose-400',    bg: 'bg-rose-500/10',    border: 'hover:border-rose-500/40'   },
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 52, scale: 0.91 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] } },
};

export default function WhatWeDo() {
  return (
    <section id="about" className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#06060F] via-blue-950/[0.08] to-[#06060F] pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/25 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/25 to-transparent" />

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
            From AI assistants to investor-ready SaaS platforms — we cover every layer
            of the stack your business needs to generate leads, automate operations, and scale.
          </p>
        </motion.div>

        {/* 10-item grid: 2 cols mobile → 2 cols tablet → 5 cols desktop = two clean rows */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 xl:grid-cols-5 gap-3 sm:gap-4"
        >
          {whatWeDoServices.map((service, i) => {
            const c = colorMap[service.color] || colorMap.blue;
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -3 }}
                className={`glass-card p-4 sm:p-5 border border-white/[0.06] transition-all duration-300
                            hover:bg-white/[0.05] hover:shadow-xl ${c.border} group cursor-default`}
              >
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${c.bg} flex items-center justify-center mb-3 sm:mb-4
                               group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={c.icon} size={18} />
                </div>
                <h3 className="text-white text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed hidden sm:block">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10 sm:mt-12"
        >
          <p className="text-slate-500 text-sm mb-4">
            Not sure exactly what you need? That's what the discovery call is for.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary text-sm w-auto min-h-0 px-6 py-2.5 inline-flex"
          >
            Start a Conversation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
