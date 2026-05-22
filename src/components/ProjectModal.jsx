import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, Users, TrendingUp, Target, Image } from 'lucide-react';

const statusConfig = {
  development: { label: 'In Development', cls: 'badge-development' },
  mvp: { label: 'MVP', cls: 'badge-mvp' },
  concept: { label: 'Concept', cls: 'badge-concept' },
  client: { label: 'Client System', cls: 'badge-client' },
};

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

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-start justify-center p-4 overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-3xl my-8 glass-card border border-white/[0.1] shadow-2xl overflow-hidden"
        >
          {/* Header banner */}
          <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden flex items-center justify-center`}>
            {/* Abstract pattern */}
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl bg-white/10" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full blur-3xl bg-black/20" />

            <div className="relative z-10 text-center">
              <div className="text-5xl mb-2">{project.icon}</div>
              <h2 className="text-white text-2xl font-black">{project.name}</h2>
              <p className="text-white/70 text-sm mt-1">{project.tagline}</p>
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-black/30 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/50 transition-all"
            >
              <X size={16} />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.1] text-slate-300">
                {project.category}
              </span>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${status.cls}`}>
                {status.label}
              </span>
            </div>

            {/* Problem + Solution */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center gap-2 text-orange-400 text-xs font-bold uppercase tracking-widest mb-3">
                  <Target size={14} />
                  The Problem
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{project.problem}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">
                  <TrendingUp size={14} />
                  Our Solution
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <div className="flex items-center gap-2 text-violet-400 text-xs font-bold uppercase tracking-widest mb-4">
                <CheckCircle2 size={14} />
                Key Features
              </div>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {project.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {/* Target Users + Business Value */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="glass-card p-4">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">
                  <Users size={14} />
                  Target Users
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{project.targetUsers}</p>
              </div>
              <div className="glass-card p-4">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">
                  <TrendingUp size={14} />
                  Business Value
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{project.businessValue}</p>
              </div>
            </div>

            {/* Screenshots placeholder */}
            <div>
              <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">
                <Image size={14} />
                Screenshots / Preview
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`h-24 rounded-xl bg-gradient-to-br ${project.gradient} opacity-20 border border-white/[0.08] flex items-center justify-center`}
                  >
                    <Image size={20} className="text-white/30" />
                  </div>
                ))}
              </div>
              <p className="text-slate-600 text-xs mt-2 text-center">Screenshots coming soon</p>
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-slate-400 text-sm">Interested in a similar build for your business?</p>
              <button
                onClick={() => {
                  onClose();
                  setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 300);
                }}
                className="btn-primary flex-shrink-0"
              >
                Discuss a Similar Build
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
