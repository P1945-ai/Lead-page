import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Eye } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectModal from './ProjectModal';

const statusConfig = {
  development: { label: 'In Development', cls: 'badge-development' },
  mvp: { label: 'MVP', cls: 'badge-mvp' },
  concept: { label: 'Concept', cls: 'badge-concept' },
  client: { label: 'Client System', cls: 'badge-client' },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function FeaturedProjects() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800/30 to-navy-900 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <div className="section-label">Our Work</div>
            <h2 className="section-title">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subtitle">
              A portfolio of platforms, tools, and systems built by Revenue Engine Limited — each
              one engineered to solve a real business problem.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {projects.map((project) => {
              const status = statusConfig[project.statusKey] || statusConfig.concept;
              return (
                <motion.div
                  key={project.id}
                  variants={card}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="project-card glass-card border border-white/[0.07] overflow-hidden group cursor-pointer shimmer-hover"
                  onClick={() => setSelected(project)}
                >
                  {/* Card top gradient */}
                  <div className={`relative h-40 bg-gradient-to-br ${project.gradient} overflow-hidden flex items-center justify-center`}>
                    <div className="absolute inset-0 grid-pattern opacity-20" />
                    <div
                      className="absolute -right-8 -top-8 w-32 h-32 rounded-full blur-2xl bg-white/10"
                    />
                    <div
                      className="absolute -left-4 -bottom-4 w-24 h-24 rounded-full blur-2xl bg-black/20"
                    />
                    <span className="relative z-10 text-5xl drop-shadow-lg filter">{project.icon}</span>

                    {/* Status badge */}
                    <div className="absolute top-3 right-3">
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${status.cls}`}>
                        {status.label}
                      </span>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-5">
                    {/* Category */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500">
                        {project.category}
                      </span>
                      <Eye size={14} className="text-slate-600 group-hover:text-blue-400 transition-colors" />
                    </div>

                    {/* Title */}
                    <h3 className="text-white font-bold text-lg mb-1 group-hover:gradient-text transition-all duration-300">
                      {project.name}
                    </h3>
                    <p className="text-blue-400/80 text-xs font-medium mb-3">{project.tagline}</p>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-4">
                      {project.description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/[0.05]">
                      <button
                        className="text-sm font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1.5 transition-colors group/btn"
                        onClick={(e) => { e.stopPropagation(); setSelected(project); }}
                      >
                        View Details
                        <ExternalLink size={13} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </button>
                      <div
                        className="w-6 h-6 rounded-lg flex items-center justify-center"
                        style={{ background: project.glowColor }}
                      >
                        <span className="text-xs">{project.icon}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* More coming */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 glass-card border border-white/[0.07] rounded-2xl text-slate-500 text-sm">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              More projects in development — check back soon
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
