import { motion } from 'framer-motion';
import { Search, Map, Palette, Code2, TestTube2, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery',
    description:
      'We dive deep into your business, goals, audience, and competitive landscape to understand exactly what needs to be built and why.',
    color: 'blue',
    gradient: 'from-blue-600 to-cyan-500',
  },
  {
    number: '02',
    icon: Map,
    title: 'Strategy',
    description:
      'We define the product vision, core features, user journey, and business logic before a single line of code is written.',
    color: 'violet',
    gradient: 'from-violet-600 to-purple-500',
  },
  {
    number: '03',
    icon: Palette,
    title: 'UX / UI Direction',
    description:
      'We design the user experience and visual direction — wireframes, component systems, and interface designs that are both intuitive and premium.',
    color: 'cyan',
    gradient: 'from-cyan-600 to-blue-500',
  },
  {
    number: '04',
    icon: Code2,
    title: 'MVP Build',
    description:
      'We move from design to production, building your product with clean, scalable code and modern architecture that won\'t need to be thrown away later.',
    color: 'emerald',
    gradient: 'from-emerald-600 to-teal-500',
  },
  {
    number: '05',
    icon: TestTube2,
    title: 'Testing & Refinement',
    description:
      'We test across devices, user flows, and edge cases — then refine based on real feedback to ensure quality before launch.',
    color: 'amber',
    gradient: 'from-amber-600 to-orange-500',
  },
  {
    number: '06',
    icon: Rocket,
    title: 'Launch Support',
    description:
      'We don\'t disappear after launch. We support your go-to-market, monitor performance, and iterate rapidly based on what real users tell us.',
    color: 'rose',
    gradient: 'from-rose-600 to-pink-500',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const stepVariant = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function Process() {
  return (
    <section id="process" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />

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
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="section-subtitle">
            A structured, six-step approach that takes your idea from concept to launched product
            — built right the first time.
          </p>
        </motion.div>

        {/* Steps grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                variants={stepVariant}
                whileHover={{ y: -5 }}
                className="glass-card-hover p-6 group relative overflow-hidden"
              >
                {/* Step number (background) */}
                <div className="absolute -right-2 -top-3 text-7xl font-black text-white/[0.03] select-none pointer-events-none">
                  {step.number}
                </div>

                {/* Step indicator */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white" size={22} />
                  </div>
                  <span className={`text-xs font-black tracking-widest bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
                    STEP {step.number}
                  </span>
                </div>

                <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>

                {/* Connecting arrow (except last row) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10">
                    {i % 3 !== 2 && (
                      <div className="w-5 h-px bg-gradient-to-r from-white/20 to-transparent" />
                    )}
                  </div>
                )}
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
          className="mt-14 text-center"
        >
          <p className="text-slate-400 text-base mb-6">
            Ready to start the process? Let's begin with a discovery conversation.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Book a Discovery Call
          </button>
        </motion.div>
      </div>
    </section>
  );
}
