// Design tokens — single source of truth. Use via CSS custom properties in components.
// WARM LIGHT THEME — pivoted from dark. Token NAMES preserved; values updated.
export const colors = {
  bg: '#FAFAF5',              // warm cream — base
  surface: '#FFFFFF',         // pure white cards
  surfaceWarm: '#F5F0E8',     // warm accent zones
  surfaceElevated: '#FFFFFF',
  border: '#E5E1D8',          // soft warm dividers
  textPrimary: '#1A1A1A',     // near-black headlines
  textSecondary: '#4A4A4A',   // dark grey body
  textMuted: '#8A8580',       // captions
  accent: '#FF4F00',          // international orange — primary CTA
  accentHover: '#E63E00',
  accentGlow: 'rgba(255, 79, 0, 0.25)',
  accentSecondary: '#5B6CFF', // indigo — links, voice/chat highlights
  success: '#10B981',
} as const;

export const typography = {
  fontDisplay: '"Geist Variable", "Inter", system-ui, sans-serif',
  fontBody: '"Inter", system-ui, sans-serif',
  fontMono: '"Geist Mono Variable", "Courier New", monospace',
} as const;

export const radius = {
  card: '16px',
  button: '8px',
  pill: '999px',
} as const;

export const shadows = {
  sm: '0 1px 2px rgba(26,26,26,0.06)',
  md: '0 4px 16px rgba(26,26,26,0.08)',
  lg: '0 12px 40px rgba(26,26,26,0.12)',
  glow: '0 0 60px rgba(255,79,0,0.15)',
} as const;

export const spacing = {
  sectionDesktop: '120px',
  sectionMobile: '80px',
  containerMax: '1280px',
} as const;
