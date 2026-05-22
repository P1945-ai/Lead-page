import { motion } from 'framer-motion';
import { Search, Map, Palette, Code2, TestTube2, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery',
    description:
      'We dig into your business model, goals, competitive landscape, and the actual problem you\'re solving — before we touch a wireframe.',
    gradient: 'from-blue-600 to-cyan-500',
  },
  {
    number: '02',
    icon: Map,
    title: 'Strategy',
    description:
      'We define the product scope, core features, user journey, and technical architecture. No ambiguity going into the build.',
    gradient: 'from-violet-600 to-purple-500',
  },
  {
    number: '03',
    icon: Palette,
    title: 'UX / UI Direction',
    description:
      'We design the experience and visual system — from wireframes to component libraries. Premium by default, not as an add-on.',
    gradient: 'from-cyan-600 to-blue-500',
  },
  {
    number: '04',
    icon: Code2,
    title: 'MVP Build',
    description:
      'We build with production-quality code and modern architecture. What we ship in the MVP won\'t be thrown out when you scale.',
    gradient: 'from-emerald-600 to-teal-500',
  },
  {
    number: '05',
    icon: TestTube2,
    title: 'Testing & Refinement',
    description:
      'We test across devices and real user flows. We refine until the experience is clean, the logic is solid, and the product is ready.',
    gradient: 'from-amber-600 to-orange-500',
  },
  {
    number: '06',
    icon: Rocket,
    title: 'Launch & Support',
    description:
      'We support your go-to-market, monitor performance, and stay available for rapid iteration in the critical post-launch window.',
    gradient: 'from-rose-600 to-pink-500',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const stepVariant = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Process() {
  return (
    <section id="process" className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/[0.07] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <div className="section-label">How We Work</div>
          <h2 className="section-title">
            Our <span className="gradient-text">6-Step Process</span>
          </h2>
          <p className="section-subtitle">
            A structured approach that eliminates uncertainty, moves fast, and delivers
            products that are built right the first time.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                variants={stepVariant}
                whileHover={{ y: -4 }}
                className="glass-card-hover p-5 sm:p-6 group relative overflow-hidden"
              >
                {/* Large ghost number */}
                <div className="absolute -right-1 -top-2 text-[6rem] font-black text-white/[0.025] select-none pointer-events-none leading-none">
                  {step.number}
                </div>

                <div className="relative z-10">
                  {/* Step badge + icon row */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br ${step.gradient}
                                    flex items-center justify-center shadow-lg
                                    group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white" size={20} />
                    </div>
                    <span className={`text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase
                                     bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
                      Step {step.number}
                    </span>
                  </div>

                  <h3 className="text-white font-bold text-base sm:text-lg mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 sm:mt-14 text-center"
        >
          <p className="text-slate-400 text-sm mb-5">
            Step one is a no-pressure discovery conversation. No commitment required.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary min-h-0 w-auto inline-flex px-6 py-3"
          >
            Book a Discovery Conversation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
