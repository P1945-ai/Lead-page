import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, Users, TrendingUp, Target, BarChart3, Layout } from 'lucide-react';
import { ProjectIcon } from '../utils/projectIcons';

const statusConfig = {
  development: { label: 'In Development', cls: 'badge-development' },
  mvp:         { label: 'MVP',            cls: 'badge-mvp' },
  concept:     { label: 'Concept',        cls: 'badge-concept' },
  client:      { label: 'Client System',  cls: 'badge-client' },
};

/* Three distinct mock-UI patterns for the screenshot placeholders */
function MockScreen({ index, gradient }) {
  const patterns = [
    // Dashboard view
    <div key="a" className="w-full h-full p-3 flex flex-col gap-1.5">
      <div className="flex gap-1.5 mb-1">
        {['w-8','w-12','w-6'].map((w,i) => (
          <div key={i} className={`h-1.5 rounded-full bg-white/10 ${w}`} />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-1.5 mb-1.5">
        {[1,2,3].map(i => (
          <div key={i} className="h-8 rounded bg-white/5 border border-white/[0.06] flex items-end p-1">
            <div className="w-full h-[40%] rounded-sm bg-white/10" />
          </div>
        ))}
      </div>
      <div className="flex-1 rounded bg-white/[0.03] border border-white/[0.05]" />
      <div className="flex gap-1">
        <div className="h-1.5 w-3/4 rounded-full bg-white/[0.06]" />
        <div className="h-1.5 flex-1 rounded-full bg-white/[0.04]" />
      </div>
    </div>,

    // Analytics view
    <div key="b" className="w-full h-full p-3 flex flex-col gap-2">
      <div className="flex items-center gap-1.5">
        <div className="w-4 h-4 rounded bg-white/10" />
        <div className="h-1.5 w-16 rounded-full bg-white/10" />
        <div className="ml-auto h-1.5 w-8 rounded-full bg-white/[0.06]" />
      </div>
      <div className="flex-1 rounded bg-white/[0.03] border border-white/[0.05] p-2 flex items-end gap-1">
        {[30,55,40,70,45,80,60,90].map((h,i) => (
          <div key={i} className="flex-1 rounded-sm bg-white/10" style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        {[1,2].map(i => (
          <div key={i} className="h-5 rounded bg-white/[0.04] border border-white/[0.05]" />
        ))}
      </div>
    </div>,

    // List / CRM view
    <div key="c" className="w-full h-full p-3 flex flex-col gap-1.5">
      <div className="h-5 rounded bg-white/[0.06] mb-0.5" />
      {[1,2,3,4].map(i => (
        <div key={i} className="flex items-center gap-2 h-5">
          <div className="w-3 h-3 rounded-full bg-white/10 flex-shrink-0" />
          <div className="h-1.5 flex-1 rounded-full bg-white/[0.06]" />
          <div className="h-1.5 w-8 rounded-full bg-white/[0.04]" />
        </div>
      ))}
      <div className="mt-auto h-5 rounded bg-white/[0.04] border border-white/[0.05]" />
    </div>,
  ];
  return patterns[index % patterns.length];
}

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handler = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;
  const status = statusConfig[project.statusKey] || statusConfig.concept;

  const handleBuildSimilar = () => {
    onClose();
    setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 300);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-md flex items-start justify-center p-3 sm:p-4 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-label={`${project.name} project details`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 12 }}
          transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-3xl my-6 sm:my-10 bg-[#0D0D20] border border-white/[0.1] rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Hero banner */}
          <div className={`relative h-44 sm:h-52 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
            <div className="absolute inset-0 grid-pattern opacity-[0.15]" />
            <div className="absolute -right-12 -top-12 w-56 h-56 rounded-full blur-3xl bg-white/10" />
            <div className="absolute -left-8 -bottom-8 w-44 h-44 rounded-full blur-3xl bg-black/25" />

            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
              <div className="mb-3 filter drop-shadow-lg">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-black/25 backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto">
                  <ProjectIcon name={project.icon} size={36} className="text-white" />
                </div>
              </div>
              <h2 className="text-white text-xl sm:text-2xl font-black leading-tight">{project.name}</h2>
              <p className="text-white/65 text-xs sm:text-sm mt-1">{project.tagline}</p>
            </div>

            <button
              onClick={onClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 rounded-xl bg-black/35 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/55 transition-all"
              aria-label="Close modal"
            >
              <X size={15} />
            </button>
          </div>

          {/* Body */}
          <div className="p-5 sm:p-7 space-y-7">

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.09] text-slate-300">
                {project.category}
              </span>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${status.cls}`}>
                {status.label}
              </span>
            </div>

            {/* Problem / Solution */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              <div className="bg-orange-950/20 border border-orange-500/15 rounded-xl p-4">
                <div className="flex items-center gap-2 text-orange-400 text-xs font-bold uppercase tracking-widest mb-3">
                  <Target size={13} />
                  The Problem
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{project.problem}</p>
              </div>
              <div className="bg-blue-950/20 border border-blue-500/15 rounded-xl p-4">
                <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">
                  <TrendingUp size={13} />
                  Our Solution
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <div className="flex items-center gap-2 text-violet-400 text-xs font-bold uppercase tracking-widest mb-4">
                <CheckCircle2 size={13} />
                Key Features
              </div>
              <div className="grid sm:grid-cols-2 gap-2">
                {project.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-blue-500/15 border border-blue-500/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    </div>
                    <span className="text-slate-300 text-sm leading-relaxed">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Users + Business Value */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-emerald-950/15 border border-emerald-500/15 rounded-xl p-4">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2.5">
                  <Users size={13} />
                  Target Users
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{project.targetUsers}</p>
              </div>
              <div className="bg-amber-950/15 border border-amber-500/15 rounded-xl p-4">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-2.5">
                  <BarChart3 size={13} />
                  Business Value
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{project.businessValue}</p>
              </div>
            </div>

            {/* Screenshot placeholders — premium mock UI */}
            <div>
              <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-widest mb-3">
                <Layout size={13} />
                Interface Preview
              </div>
              <div className="grid grid-cols-3 gap-2.5">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className={`screenshot-placeholder h-28 sm:h-32 rounded-xl overflow-hidden relative`}
                    style={{
                      background: `linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))`,
                    }}
                  >
                    {/* Tinted overlay matching the project color */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-[0.06]`}
                    />
                    <div className="relative z-10 h-full">
                      <MockScreen index={i} gradient={project.gradient} />
                    </div>
                    {/* Coming soon badge on middle card */}
                    {i === 1 && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[9px] font-bold tracking-widest uppercase text-slate-600 bg-black/40 px-2 py-1 rounded-full border border-white/[0.04]">
                          Preview Soon
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-slate-700 text-xs mt-2 text-center">
                Live screenshots will be added when the product reaches public demo stage.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-5 border-t border-white/[0.06]">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-white text-sm font-semibold mb-0.5">
                    Want something like this for your business?
                  </p>
                  <p className="text-slate-500 text-xs">
                    We build similar systems in weeks, not months.
                  </p>
                </div>
                <button
                  onClick={handleBuildSimilar}
                  className="btn-primary flex-shrink-0 min-h-0 py-3 px-6 w-full sm:w-auto"
                >
                  Build Something Similar
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
