import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { mainServices } from '../data/services';

const colorGlowMap = {
  blue: 'group-hover:shadow-blue-500/15',
  violet: 'group-hover:shadow-violet-500/15',
  emerald: 'group-hover:shadow-emerald-500/15',
  orange: 'group-hover:shadow-orange-500/15',
  cyan: 'group-hover:shadow-cyan-500/15',
  pink: 'group-hover:shadow-pink-500/15',
  amber: 'group-hover:shadow-amber-500/15',
  indigo: 'group-hover:shadow-indigo-500/15',
};

const iconBgMap = {
  blue: 'from-blue-600 to-blue-400',
  violet: 'from-violet-600 to-violet-400',
  emerald: 'from-emerald-600 to-emerald-400',
  orange: 'from-orange-600 to-orange-400',
  cyan: 'from-cyan-600 to-cyan-400',
  pink: 'from-pink-600 to-pink-400',
  amber: 'from-amber-600 to-amber-400',
  indigo: 'from-indigo-600 to-indigo-400',
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      {/* Orbs */}
      <div className="orb w-96 h-96 bg-violet-700 -top-24 -right-24 opacity-10" />
      <div className="orb w-80 h-80 bg-blue-700 bottom-0 -left-20 opacity-10" />

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
            Eight core service areas covering everything your business needs to compete, scale, and
            win in the digital economy.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {mainServices.map((service, i) => {
            const Icon = service.icon;
            const glowCls = colorGlowMap[service.color] || colorGlowMap.blue;
            const iconGrad = iconBgMap[service.color] || iconBgMap.blue;

            return (
              <motion.div
                key={i}
                variants={cardVariant}
                whileHover={{ y: -5 }}
                className={`glass-card-hover p-6 group flex flex-col hover:shadow-xl ${glowCls} transition-shadow duration-300`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${iconGrad} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white" size={22} />
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-base mb-2 leading-tight">{service.title}</h3>

                {/* Gradient divider */}
                <div className={`h-px w-12 bg-gradient-to-r ${service.gradient} mb-3 group-hover:w-full transition-all duration-500`} />

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">{service.description}</p>

                {/* Features */}
                <ul className="space-y-1.5 mb-5">
                  {service.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-slate-500">
                      <Check size={12} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors group/btn mt-auto"
                >
                  Get Started
                  <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 glass-card border border-white/[0.07] p-8 sm:p-10 text-center bg-gradient-to-br from-blue-950/30 via-transparent to-violet-950/30"
        >
          <h3 className="text-white text-2xl sm:text-3xl font-bold mb-3">
            Need something <span className="gradient-text">custom</span>?
          </h3>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto text-sm leading-relaxed">
            We've built everything from B2B trade platforms to AI bedtime story generators. If you
            have a vision, we have the technical and strategic capability to build it.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Tell Us About Your Project
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
