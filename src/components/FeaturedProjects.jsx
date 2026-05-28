import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectModal from './ProjectModal';
import { ProjectIcon } from '../utils/projectIcons';

const statusConfig = {
  development: { label: 'In Development', cls: 'badge-development' },
  mvp:         { label: 'MVP',             cls: 'badge-mvp' },
  concept:     { label: 'Concept',         cls: 'badge-concept' },
  client:      { label: 'Client System',   cls: 'badge-client' },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const card = {
  hidden: { opacity: 0, y: 56, scale: 0.94 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: [0.23, 1, 0.32, 1] } },
};

export default function FeaturedProjects() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section id="projects" className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#06060F] via-blue-900/20 to-[#06060F] pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

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
              Seven platforms, tools, and systems — each engineered to solve a real business
              problem and built to demonstrate what Revenue Engine Limited is capable of.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 items-start"
          >
            {projects.map((project) => {
              const status = statusConfig[project.statusKey] || statusConfig.concept;
              return (
                <motion.article
                  key={project.id}
                  variants={card}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25 }}
                  className="project-card glass-card border border-white/[0.07] overflow-hidden group cursor-pointer h-full"
                  onClick={() => setSelected(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setSelected(project)}
                  aria-label={`View details for ${project.name}`}
                >
                  {/* Visual header */}
                  <div className={`relative h-44 bg-gradient-to-br ${project.gradient} overflow-hidden flex items-center justify-center flex-shrink-0`}>
                    <div className="absolute inset-0 grid-pattern opacity-[0.18]" />
                    <div className="absolute -right-6 -top-6 w-36 h-36 rounded-full blur-2xl bg-white/10" />
                    <div className="absolute -left-4 -bottom-4 w-28 h-28 rounded-full blur-2xl bg-black/20" />

                    <div className="relative z-10 w-16 h-16 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-xl">
                      <ProjectIcon name={project.icon} size={32} className="text-white" />
                    </div>

                    {/* Category top-left */}
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-bold tracking-widest uppercase text-white/60 bg-black/20 backdrop-blur-sm px-2.5 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>

                    {/* Status top-right */}
                    <div className="absolute top-3 right-3">
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${status.cls}`}>
                        {status.label}
                      </span>
                    </div>
                  </div>

                  {/* Card body — flex-grow ensures equal height across the row */}
                  <div className="p-5 flex flex-col flex-1">
                    {/* Title + tagline */}
                    <h3 className="text-white font-bold text-lg leading-tight mb-1 group-hover:text-blue-300 transition-colors duration-200">
                      {project.name}
                    </h3>
                    <p className="text-blue-400/70 text-xs font-medium mb-3 tracking-wide">
                      {project.tagline}
                    </p>

                    {/* Description — flex-1 makes it fill remaining space */}
                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 flex-1 mb-5">
                      {project.description}
                    </p>

                    {/* CTA row */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/[0.05] mt-auto">
                      <button
                        className="flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group/btn"
                        onClick={(e) => { e.stopPropagation(); setSelected(project); }}
                      >
                        <Eye size={14} />
                        View Details
                        <ChevronRight size={13} className="group-hover/btn:translate-x-0.5 transition-transform" />
                      </button>
                      <div
                        className="w-7 h-7 rounded-xl flex items-center justify-center"
                        style={{ background: `${project.glowColor}`, border: `1px solid ${project.glowColor}` }}
                      >
                        <ProjectIcon name={project.icon} size={14} className="text-white" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center gap-3 px-5 py-3 glass-card border border-white/[0.06] rounded-2xl text-slate-500 text-sm">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              New projects in development — portfolio expanding
            </div>
          </motion.div>
        </div>
      </section>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
