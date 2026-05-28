import { motion } from 'framer-motion';
import { TrendingDown, Rocket, Users, Clock } from 'lucide-react';
import CountUp from './CountUp';

const metrics = [
  {
    icon: TrendingDown,
    value: 55,
    suffix: '%',
    label: 'Avg. reduction in customer acquisition cost',
    detail: 'via AI-powered funnels and automation',
    color: 'from-blue-600 to-cyan-500',
    iconColor: 'text-cyan-400',
  },
  {
    icon: Rocket,
    value: 3,
    suffix: '×',
    label: 'Faster delivery than traditional agencies',
    detail: 'from concept to working product',
    color: 'from-violet-600 to-purple-500',
    iconColor: 'text-violet-400',
  },
  {
    icon: Users,
    value: 48,
    suffix: '%+',
    label: 'More leads captured after system deploy',
    detail: 'through missed-call recovery & smart funnels',
    color: 'from-emerald-600 to-teal-500',
    iconColor: 'text-emerald-400',
  },
  {
    icon: Clock,
    value: 24,
    suffix: 'h',
    label: 'Response time on every project inquiry',
    detail: 'we review every brief personally',
    color: 'from-amber-600 to-orange-500',
    iconColor: 'text-amber-400',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.93 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.23, 1, 0.32, 1] },
  },
};

export default function Stats() {
  return (
    <section className="relative py-14 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Gradient line borders */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      {/* Subtle mid-glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-transparent to-violet-950/20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-bold tracking-[0.22em] uppercase text-slate-500 mb-8"
        >
          What our systems deliver
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {metrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -4 }}
                className="glass-card p-5 sm:p-6 border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 group relative overflow-hidden"
              >
                {/* Subtle gradient fill on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${m.color} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none`} />

                <div className="relative z-10">
                  <Icon size={18} className={`${m.iconColor} mb-3`} />

                  <div className="text-3xl sm:text-4xl font-black text-white mb-1 leading-none tabular-nums">
                    <CountUp to={m.value} duration={1600} suffix={m.suffix} />
                  </div>

                  <p className="text-white text-xs font-semibold mb-1 leading-snug">
                    {m.label}
                  </p>
                  <p className="text-slate-600 text-[11px] leading-snug">{m.detail}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
