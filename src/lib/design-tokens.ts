// Design tokens — single source of truth. Use via CSS custom properties in components.
export const colors = {
  bg: '#0A0A0F',
  surface: '#15151B',
  surfaceElevated: '#1E1E26',
  border: '#27272F',
  textPrimary: '#FFFFFF',
  textSecondary: '#A0A0AB',
  textMuted: '#6B6B75',
  accent: '#5B6CFF',
  accentGlow: '#7B8AFF',
  success: '#10B981',
} as const;

export const typography = {
  fontDisplay: '"Geist Variable", "Inter", system-ui, sans-serif',
  fontBody: '"Inter", system-ui, sans-serif',
  fontMono: '"Geist Mono Variable", "Courier New", monospace',
} as const;

export const radius = {
  card: '12px',
  button: '8px',
  pill: '999px',
} as const;

export const shadows = {
  sm: '0 1px 2px rgba(0,0,0,0.4)',
  md: '0 4px 12px rgba(0,0,0,0.5)',
  glow: '0 0 40px rgba(91,108,255,0.25)',
} as const;

export const spacing = {
  sectionDesktop: '120px',
  sectionMobile: '80px',
  containerMax: '1280px',
} as const;
