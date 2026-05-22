import { motion } from 'framer-motion';
import { Lightbulb, Settings2, TrendingUp, Rocket, Brain } from 'lucide-react';

const reasons = [
  {
    icon: Lightbulb,
    title: 'We Think Like Operators, Not Just Builders',
    description:
      'We understand revenue cycles, operational bottlenecks, and what it actually costs a business to run inefficiently. Our builds reflect that — not just clean code, but systems that change outcomes.',
    gradient: 'from-amber-600 to-orange-500',
  },
  {
    icon: Settings2,
    title: 'Built for Real Workflows, Not Demos',
    description:
      'Every system we ship is designed to be used daily by real teams. Clarity, speed, and reliability over complexity. If your team won\'t use it, it doesn\'t matter how well it\'s built.',
    gradient: 'from-blue-600 to-cyan-500',
  },
  {
    icon: TrendingUp,
    title: 'Revenue, Leads, and Operations Are the Metrics',
    description:
      'We don\'t optimize for vanity metrics. Every build is anchored to business outcomes — lead volume, conversion rate, time saved, revenue recovered, or operational capacity gained.',
    gradient: 'from-emerald-600 to-teal-500',
  },
  {
    icon: Rocket,
    title: 'Concept to Working Product — Quickly',
    description:
      'We move from brief to MVP without months of slow-burn agency process. You get a working, testable product fast — one that\'s built on a real foundation, not a throwaway prototype.',
    gradient: 'from-violet-600 to-purple-500',
  },
  {
    icon: Brain,
    title: 'AI + Marketing + Strategy in One Studio',
    description:
      'We\'re not just a dev shop. We bring AI engineering, digital marketing architecture, funnel design, and business strategy into every engagement — across a single team.',
    gradient: 'from-pink-600 to-rose-500',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function WhyUs() {
  return (
    <section className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A1A]/60 to-transparent pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-label">Why Us</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
              Why Work With{' '}
              <span className="gradient-text">Revenue Engine</span>{' '}
              Limited
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8">
              We're a specialist AI and digital systems studio — not a generalist agency taking
              any project that comes through the door. We choose work where we can make a
              measurable difference.
            </p>

            {/* Credibility grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
              {[
                { value: '7+',        label: 'Platforms Built' },
                { value: 'AI-Native', label: 'Engineering Approach' },
                { value: 'Weeks',     label: 'Concept to MVP' },
                { value: 'Full-Stack',label: 'Delivery Capability' },
              ].map((m, i) => (
                <div key={i} className="glass-card p-4 sm:p-5 border border-white/[0.07]">
                  <div className="text-xl sm:text-2xl font-black gradient-text mb-1">{m.value}</div>
                  <div className="text-slate-500 text-xs font-medium leading-snug">{m.label}</div>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary min-h-0 w-auto inline-flex px-6 py-3"
            >
              Start a Project Conversation
            </button>
          </motion.div>

          {/* Right column — reasons list */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-3"
          >
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={i}
                  variants={item}
                  whileHover={{ x: 3 }}
                  className="glass-card-hover p-4 sm:p-5 flex items-start gap-4 group"
                >
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br ${reason.gradient}
                                  flex items-center justify-center flex-shrink-0 shadow-lg
                                  group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white" size={19} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm sm:text-base mb-1 leading-snug">
                      {reason.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
