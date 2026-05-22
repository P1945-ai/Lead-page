import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { mainServices } from '../data/services';

const colorGlowMap = {
  blue:   'hover:shadow-blue-500/10',
  violet: 'hover:shadow-violet-500/10',
  emerald:'hover:shadow-emerald-500/10',
  orange: 'hover:shadow-orange-500/10',
  cyan:   'hover:shadow-cyan-500/10',
  pink:   'hover:shadow-pink-500/10',
  amber:  'hover:shadow-amber-500/10',
  indigo: 'hover:shadow-indigo-500/10',
};

const iconBgMap = {
  blue:   'from-blue-600 to-blue-400',
  violet: 'from-violet-600 to-violet-400',
  emerald:'from-emerald-600 to-emerald-400',
  orange: 'from-orange-600 to-orange-400',
  cyan:   'from-cyan-600 to-cyan-400',
  pink:   'from-pink-600 to-pink-400',
  amber:  'from-amber-600 to-amber-400',
  indigo: 'from-indigo-600 to-indigo-400',
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/[0.08] to-transparent pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/25 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="orb w-80 h-80 bg-violet-700 -top-20 -right-20 opacity-[0.08]" />
      <div className="orb w-72 h-72 bg-blue-700 bottom-0 -left-16 opacity-[0.07]" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <div className="section-label">Services</div>
          <h2 className="section-title">
            What We <span className="gradient-text">Deliver</span>
          </h2>
          <p className="section-subtitle">
            Eight focused service areas. Each one is a standalone capability — or a
            building block inside a larger system. We scope to your actual need.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {mainServices.map((service, i) => {
            const Icon = service.icon;
            const glowCls = colorGlowMap[service.color] || colorGlowMap.blue;
            const iconGrad = iconBgMap[service.color] || iconBgMap.blue;

            return (
              <motion.div
                key={i}
                variants={cardVariant}
                whileHover={{ y: -4 }}
                className={`glass-card-hover p-5 sm:p-6 group flex flex-col hover:shadow-xl ${glowCls}`}
              >
                <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br ${iconGrad}
                                flex items-center justify-center mb-4 sm:mb-5 shadow-lg
                                group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white" size={21} />
                </div>

                <h3 className="text-white font-bold text-sm sm:text-base mb-2 leading-tight">
                  {service.title}
                </h3>

                <div className={`h-px w-10 bg-gradient-to-r ${service.gradient} mb-3
                               group-hover:w-full transition-all duration-500`} />

                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
                  {service.description}
                </p>

                <ul className="space-y-1.5 mb-4">
                  {service.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-slate-500">
                      <Check size={11} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors group/btn mt-auto w-fit"
                >
                  Get Started
                  <ArrowRight size={11} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Custom build callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-12 sm:mt-14 glass-card border border-white/[0.07] p-7 sm:p-10 text-center
                     bg-gradient-to-br from-blue-950/25 via-transparent to-violet-950/25 overflow-hidden relative"
        >
          <div className="orb w-64 h-64 bg-blue-700 -right-16 -top-16 opacity-[0.07]" />
          <div className="relative z-10">
            <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold mb-3">
              Have something <span className="gradient-text">outside the standard playbook?</span>
            </h3>
            <p className="text-slate-400 mb-6 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              We've built private trade intelligence platforms, AI bedtime story generators, and
              3D vehicle wrap configurators. Unusual requirements are welcome.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary min-h-0 w-auto inline-flex px-6 py-3"
            >
              Tell Us About Your Project
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
