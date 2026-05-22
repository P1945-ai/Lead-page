import { motion } from 'framer-motion';
import { Lightbulb, Settings2, TrendingUp, Rocket, Brain } from 'lucide-react';

const reasons = [
  {
    icon: Lightbulb,
    title: 'We Think Like Operators',
    description:
      'We don\'t just design pretty interfaces — we understand how businesses actually run. Our builds are grounded in operational reality, not just aesthetics.',
    color: 'amber',
    gradient: 'from-amber-600 to-orange-500',
  },
  {
    icon: Settings2,
    title: 'We Build for Real Business Use',
    description:
      'Every system we create is designed to be used by real people in real workflows. We prioritize clarity, reliability, and practical usability over complexity.',
    color: 'blue',
    gradient: 'from-blue-600 to-cyan-500',
  },
  {
    icon: TrendingUp,
    title: 'We Focus on Revenue & Growth',
    description:
      'Leads, revenue, workflow efficiency, and scalability — these are our north stars. If a feature doesn\'t contribute to business outcomes, it doesn\'t make the build.',
    color: 'emerald',
    gradient: 'from-emerald-600 to-teal-500',
  },
  {
    icon: Rocket,
    title: 'We Move from Concept to MVP Fast',
    description:
      'We\'ve built everything from trade intelligence platforms to AI story generators. We know how to move quickly without sacrificing quality or strategic thinking.',
    color: 'violet',
    gradient: 'from-violet-600 to-purple-500',
  },
  {
    icon: Brain,
    title: 'We Combine AI, Marketing & Strategy',
    description:
      'Not just developers — we bring AI implementation, digital marketing expertise, automation, and practical business strategy into every engagement.',
    color: 'pink',
    gradient: 'from-pink-600 to-rose-500',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function WhyUs() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-navy-800/30">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/25 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/25 to-transparent" />

      {/* Orbs */}
      <div className="orb w-80 h-80 bg-emerald-700 top-10 right-0 opacity-8" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Header + tagline */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-label">Why Us</div>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
              Why Work With{' '}
              <span className="gradient-text">Revenue Engine</span>{' '}
              Limited
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              We're not a generic digital agency. We're a specialized AI and digital systems studio
              that builds technology with a business-first mindset.
            </p>

            {/* Credibility markers */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '7+', label: 'Platforms Built' },
                { value: 'AI-First', label: 'Approach' },
                { value: 'Fast', label: 'Concept to MVP' },
                { value: 'Full-Stack', label: 'Capability' },
              ].map((m, i) => (
                <div key={i} className="glass-card p-4 border border-white/[0.07]">
                  <div className="text-2xl font-black gradient-text mb-1">{m.value}</div>
                  <div className="text-slate-500 text-xs font-medium">{m.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Start a Project Conversation
              </button>
            </div>
          </motion.div>

          {/* Right: Reasons */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-4"
          >
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={i}
                  variants={item}
                  whileHover={{ x: 4 }}
                  className="glass-card-hover p-5 flex items-start gap-4 group"
                >
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-1">{reason.title}</h3>
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
