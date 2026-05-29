export default function PromoBar() {
  const go = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div
      style={{
        position: 'relative',
        zIndex: 60,
        background: '#1A1A1A',
        color: '#fff',
      }}
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <div
          className="flex items-center justify-center sm:justify-between gap-3"
          style={{ minHeight: '44px', paddingTop: '6px', paddingBottom: '6px' }}
        >
          <p
            style={{
              fontFamily: '"Geist Mono Variable", monospace',
              fontSize: '13px',
              letterSpacing: '0.02em',
              color: 'rgba(255,255,255,0.92)',
            }}
          >
            🎤 Try Ella live · 60 seconds free · No signup
          </p>
          <button
            onClick={() => go('voice-demo')}
            className="hidden sm:inline-flex"
            style={{
              background: 'var(--accent)',
              color: '#fff',
              fontSize: '12px',
              fontWeight: 600,
              fontFamily: '"Inter", sans-serif',
              padding: '5px 14px',
              borderRadius: '999px',
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'background 200ms',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent-hover)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--accent)'; }}
          >
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}
