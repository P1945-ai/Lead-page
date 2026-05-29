import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectModal from './ProjectModal';
import { ProjectIcon } from '../utils/projectIcons';

// Show max 6 — drop the 7th
const displayed = projects.slice(0, 6);

const statusConfig = {
  development: { label: 'IN DEV',    cls: 'badge-development' },
  mvp:         { label: 'MVP',       cls: 'badge-mvp' },
  concept:     { label: 'CONCEPT',   cls: 'badge-concept' },
  client:      { label: 'CLIENT',    cls: 'badge-client' },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const cardAnim = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

export default function FeaturedProjects() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section
        id="projects"
        className="relative py-20 sm:py-30 px-6 lg:px-8"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <div className="max-w-screen-xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <span className="section-label">WHAT WE BUILD</span>
            <h2 className="section-title">
              Six platforms built in-house.<br />Each one solves a real problem.
            </h2>
            <p className="section-subtitle">
              From AI agents to operational dashboards — every system here was designed,
              built, and owned by Revenue Engine Limited.
            </p>
          </motion.div>

          {/* Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5"
          >
            {displayed.map((project) => {
              const status = statusConfig[project.statusKey] || statusConfig.concept;
              return (
                <motion.article
                  key={project.id}
                  variants={cardAnim}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="project-card cursor-pointer group"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    transition: 'border-color 200ms, box-shadow 200ms',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#3A3A50';
                    e.currentTarget.style.boxShadow = '0 0 40px rgba(91,108,255,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  onClick={() => setSelected(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setSelected(project)}
                  aria-label={`View ${project.name} details`}
                >
                  {/* Screenshot placeholder — 16:10 */}
                  <div
                    className="screenshot-placeholder"
                    style={{
                      height: '180px',
                      background: `linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))`,
                    }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-[0.08]`} />
                    <div className="relative z-10 h-full flex items-center justify-center">
                      <div
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '12px',
                          background: `rgba(255,255,255,0.06)`,
                          border: '1px solid rgba(255,255,255,0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <ProjectIcon name={project.icon} size={22} className="text-white opacity-70" />
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex flex-col flex-1">
                    {/* Icon pill + type tag */}
                    <div className="flex items-center justify-between mb-3">
                      <span className={status.cls}>{status.label}</span>
                      <span
                        className="eyebrow"
                        style={{ fontSize: '10px', color: 'var(--text-muted)' }}
                      >
                        {project.category}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontFamily: '"Geist Variable", "Inter", sans-serif',
                        fontSize: '18px',
                        fontWeight: 600,
                        letterSpacing: '-0.01em',
                        color: 'var(--text-primary)',
                        marginBottom: '6px',
                        lineHeight: '1.3',
                      }}
                    >
                      {project.name}
                    </h3>

                    <p
                      style={{
                        fontSize: '13px',
                        lineHeight: '1.6',
                        color: 'var(--text-secondary)',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        flex: 1,
                        marginBottom: '20px',
                      }}
                    >
                      {project.description}
                    </p>

                    <button
                      className="flex items-center gap-1.5 group/link"
                      style={{
                        fontSize: '13px',
                        fontWeight: 600,
                        color: 'var(--accent)',
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        cursor: 'pointer',
                        transition: 'color 200ms',
                      }}
                      onClick={(e) => { e.stopPropagation(); setSelected(project); }}
                    >
                      View case
                      <ArrowRight
                        size={13}
                        style={{ transition: 'transform 200ms' }}
                        className="group-hover/link:translate-x-0.5"
                      />
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
