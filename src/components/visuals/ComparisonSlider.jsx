import { useRef, useState, useCallback } from 'react';

/**
 * ComparisonSlider — interactive before/after reveal. `before` and `after`
 * are React nodes (we build panels live; no images). Drag the handle to wipe.
 *
 * Props: before, after, beforeLabel, afterLabel, accent, height
 */
export default function ComparisonSlider({
  before,
  after,
  beforeLabel = 'Before',
  afterLabel = 'After',
  accent = 'var(--accent)',
  height = 320,
}) {
  const containerRef = useRef(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(2, Math.min(98, pct)));
  }, []);

  const onDown = (e) => {
    dragging.current = true;
    setFromClientX(e.touches ? e.touches[0].clientX : e.clientX);
  };
  const onMove = (e) => {
    if (!dragging.current) return;
    setFromClientX(e.touches ? e.touches[0].clientX : e.clientX);
  };
  const onUp = () => { dragging.current = false; };

  return (
    <div
      ref={containerRef}
      onMouseMove={onMove}
      onMouseUp={onUp}
      onMouseLeave={onUp}
      onTouchMove={onMove}
      onTouchEnd={onUp}
      style={{
        position: 'relative', width: '100%', height,
        borderRadius: '8px', overflow: 'hidden',
        border: '1px solid var(--border)', boxShadow: 'var(--shadow-md)',
        userSelect: 'none', cursor: 'ew-resize',
      }}
    >
      {/* after (full) */}
      <div style={{ position: 'absolute', inset: 0 }}>
        {after}
        <Tag side="right" label={afterLabel} color={accent} />
      </div>

      {/* before (clipped to handle) */}
      <div style={{ position: 'absolute', inset: 0, width: `${pos}%`, overflow: 'hidden', borderRight: `2px solid ${accent}` }}>
        <div style={{ position: 'absolute', inset: 0, width: containerRef.current ? containerRef.current.offsetWidth : '100%' }}>
          {before}
          <Tag side="left" label={beforeLabel} color="var(--text-muted)" />
        </div>
      </div>

      {/* handle */}
      <button
        onMouseDown={onDown}
        onTouchStart={onDown}
        aria-label="Drag to compare before and after"
        style={{
          position: 'absolute', top: 0, bottom: 0, left: `${pos}%`, transform: 'translateX(-50%)',
          width: '40px', border: 'none', background: 'transparent', cursor: 'ew-resize', zIndex: 3,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >
        <span style={{
          width: '34px', height: '34px', borderRadius: '50%', background: accent,
          boxShadow: 'var(--shadow-md)', display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontSize: '13px',
        }}>
          ⇆
        </span>
      </button>
    </div>
  );
}

function Tag({ side, label, color }) {
  return (
    <span style={{
      position: 'absolute', top: '12px', [side]: '12px',
      fontFamily: '"Geist Mono Variable", monospace', fontSize: '11px', letterSpacing: '0.06em',
      background: 'var(--surface)', color, border: '1px solid var(--border)',
      padding: '4px 10px', borderRadius: '999px', zIndex: 2,
    }}>
      {label}
    </span>
  );
}
