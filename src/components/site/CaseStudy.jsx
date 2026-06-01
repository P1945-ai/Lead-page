import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from './Section';

/** Case-study hero: eyebrow + headline + intro + a large live visual. */
export function CaseHero({ eyebrow, headline, sub, visual, link, accent = 'var(--accent)' }) {
  return (
    <section className="relative overflow-hidden px-6 lg:px-8" style={{ background: 'var(--bg)', paddingTop: '80px', paddingBottom: '56px' }}>
      <div aria-hidden="true" className="absolute pointer-events-none" style={{
        width: '760px', height: '560px', top: '-220px', right: '-160px', opacity: 0.45,
        background: `radial-gradient(circle, color-mix(in srgb, ${accent} 22%, transparent) 0%, transparent 60%)`, filter: 'blur(20px)',
      }} />
      <div className="relative z-10 max-w-screen-xl mx-auto">
        <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="eyebrow" style={{ color: accent }}>
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }}
          style={{ fontFamily: '"Geist Variable", sans-serif', fontSize: 'clamp(36px, 5.2vw, 60px)', lineHeight: 1.07, letterSpacing: '-0.02em', fontWeight: 700, color: 'var(--text-primary)', margin: '16px 0 18px', maxWidth: '860px' }}
        >
          {headline}
        </motion.h1>
        {sub && (
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.16 }}
            style={{ fontSize: '19px', lineHeight: 1.55, color: 'var(--text-secondary)', maxWidth: '620px', marginBottom: link ? '20px' : '40px' }}>
            {sub}
          </motion.p>
        )}
        {link && (
          <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.24 }}
            href={link.href} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: accent, fontWeight: 600, textDecoration: 'none', marginBottom: '40px' }}>
            {link.label} <ArrowUpRight size={16} />
          </motion.a>
        )}
        {visual && (
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} style={{ borderRadius: '12px', overflow: 'hidden' }}>
            {visual}
          </motion.div>
        )}
      </div>
    </section>
  );
}

/** A "What We Built" tile — an illustrated card (children is the live drawing). */
export function BuiltTile({ title, desc, children, accent = 'var(--accent)' }) {
  return (
    <Reveal>
      <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', height: '100%' }}>
        <div style={{ aspectRatio: '16/9', background: 'var(--surface-warm)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          {children}
        </div>
        <div style={{ padding: '20px' }}>
          <h3 style={{ fontFamily: '"Geist Variable", sans-serif', fontSize: '17px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>{title}</h3>
          <p style={{ fontSize: '14px', lineHeight: 1.55, color: 'var(--text-secondary)' }}>{desc}</p>
        </div>
      </div>
    </Reveal>
  );
}

/** Color swatch row for design-direction sections. */
export function Swatches({ colors }) {
  return (
    <div className="flex flex-wrap gap-3">
      {colors.map((c) => (
        <div key={c.hex} style={{ textAlign: 'center' }}>
          <div style={{ width: '88px', height: '88px', borderRadius: '8px', background: c.hex, border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }} />
          <div style={{ fontFamily: '"Geist Mono Variable", monospace', fontSize: '11px', color: 'var(--text-secondary)', marginTop: '8px' }}>{c.name}</div>
          <div style={{ fontFamily: '"Geist Mono Variable", monospace', fontSize: '11px', color: 'var(--text-muted)' }}>{c.hex}</div>
        </div>
      ))}
    </div>
  );
}
