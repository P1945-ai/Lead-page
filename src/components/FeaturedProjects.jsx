import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectModal from './ProjectModal';
import { ProjectIcon } from '../utils/projectIcons';

const displayed = projects.slice(0, 6);

const statusConfig = {
  development: { label: 'IN DEV',  cls: 'badge-development' },
  mvp:         { label: 'MVP',     cls: 'badge-mvp' },
  concept:     { label: 'CONCEPT', cls: 'badge-concept' },
  client:      { label: 'CLIENT',  cls: 'badge-client' },
};

// 6 cycling accent themes for category pills
const pillThemes = [
  { bg: 'rgba(91,108,255,0.14)',  border: 'rgba(91,108,255,0.3)',  color: 'var(--accent-glow)' },
  { bg: 'rgba(255,79,157,0.12)',  border: 'rgba(255,79,157,0.3)',  color: 'var(--accent-pink)' },
  { bg: 'rgba(0,212,255,0.12)',   border: 'rgba(0,212,255,0.28)',  color: 'var(--accent-cyan)' },
  { bg: 'rgba(255,181,71,0.12)',  border: 'rgba(255,181,71,0.3)',  color: 'var(--accent-amber)' },
  { bg: 'rgba(80,227,164,0.12)',  border: 'rgba(80,227,164,0.28)', color: 'var(--accent-lime)' },
  { bg: 'rgba(167,139,250,0.12)', border: 'rgba(167,139,250,0.3)', color: '#C4B5FD' },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const cardAnim = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

// Abstract UI shapes inside browser mockup
function MockUI({ gradient, glowColor }) {
  return (
    <div style={{ padding: '10px 12px', height: '100%', position: 'relative', overflow: 'hidden' }}>
      {/* Base tint from project gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} style={{ opacity: 0.12 }} />
      {/* Glow accent */}
      <div style={{
        position: 'absolute',
        top: '-30px',
        right: '-20px',
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
        filter: 'blur(24px)',
        opacity: 0.7,
      }} />
      {/* Abstract UI skeleton lines */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '7px' }}>
        <div style={{ height: '7px', borderRadius: '4px', background: 'rgba(255,255,255,0.1)', width: '55%' }} />
        <div style={{ height: '5px', borderRadius: '3px', background: 'rgba(255,255,255,0.06)', width: '85%' }} />
        <div style={{ height: '5px', borderRadius: '3px', background: 'rgba(255,255,255,0.06)', width: '70%' }} />
        <div style={{ display: 'flex', gap: '6px', marginTop: '4px' }}>
          <div style={{ flex: 1, height: '36px', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)' }} />
          <div style={{ flex: 1, height: '36px', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)' }} />
        </div>
        <div style={{ height: '5px', borderRadius: '3px', background: 'rgba(255,255,255,0.05)', width: '45%' }} />
      </div>
    </div>
  );
}

export default function FeaturedProjects() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section
        id="projects"
        className="relative py-20 sm:py-30 px-6 lg:px-8 section-top-divider"
      >
        <div className="max-w-screen-xl mx-auto">

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

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5"
          >
            {displayed.map((project, idx) => {
              const status = statusConfig[project.statusKey] || statusConfig.concept;
              const pill = pillThemes[idx % pillThemes.length];
              return (
                <motion.article
                  key={project.id}
                  variants={cardAnim}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="project-card cursor-pointer"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    transition: 'border-color 200ms, box-shadow 200ms',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                    e.currentTarget.style.boxShadow = `0 0 40px ${project.glowColor}, 0 8px 32px rgba(0,0,0,0.35)`;
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
                  {/* macOS browser frame */}
                  <div style={{ height: '180px', overflow: 'hidden', display: 'flex', flexDirection: 'column', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    {/* Chrome bar */}
                    <div style={{
                      height: '26px',
                      background: 'rgba(255,255,255,0.025)',
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0 10px',
                      gap: '5px',
                      flexShrink: 0,
                    }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FF5F57', opacity: 0.75 }} />
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FEBC2E', opacity: 0.75 }} />
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#28C840', opacity: 0.75 }} />
                      <div style={{ marginLeft: '8px', flex: 1, height: '12px', borderRadius: '4px', background: 'rgba(255,255,255,0.04)', maxWidth: '100px' }} />
                    </div>
                    {/* Mockup content */}
                    <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                      <MockUI gradient={project.gradient} glowColor={project.glowColor} />
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <span className={status.cls}>{status.label}</span>
                      {/* Colorful gradient category pill */}
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          padding: '2px 9px',
                          borderRadius: '999px',
                          background: pill.bg,
                          border: `1px solid ${pill.border}`,
                          color: pill.color,
                          fontSize: '10px',
                          fontFamily: '"Geist Mono Variable", monospace',
                          fontWeight: 600,
                          letterSpacing: '0.05em',
                        }}
                      >
                        {project.category}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontFamily: '"Geist Variable", "Inter", sans-serif',
                        fontSize: '17px',
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
                        marginBottom: '18px',
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
