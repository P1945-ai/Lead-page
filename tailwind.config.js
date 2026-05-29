/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#FAFAF5',
        surface: '#FFFFFF',
        'surface-warm': '#F5F0E8',
        'surface-elevated': '#FFFFFF',
        border: '#E5E1D8',
        accent: '#FF4F00',
        'accent-hover': '#E63E00',
        'accent-secondary': '#5B6CFF',
        success: '#10B981',
      },
      fontFamily: {
        sans:    ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Geist Variable"', '"Inter"', 'system-ui', 'sans-serif'],
        mono:    ['"Geist Mono Variable"', '"Courier New"', 'monospace'],
      },
      fontSize: {
        'hero':    ['96px', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
        'display': ['72px', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'h1':      ['72px', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'h2':      ['56px', { lineHeight: '1.1',  letterSpacing: '-0.015em' }],
        'h3':      ['32px', { lineHeight: '1.2',  letterSpacing: '-0.01em' }],
      },
      spacing: {
        '18': '72px',
        '22': '88px',
        '30': '120px',
      },
      maxWidth: {
        'screen-xl': '1280px',
        'hero': '960px',
      },
      borderRadius: {
        'card':   '16px',
        'button': '8px',
        'pill':   '999px',
      },
      boxShadow: {
        'soft-sm': '0 1px 2px rgba(26,26,26,0.06)',
        'soft-md': '0 4px 16px rgba(26,26,26,0.08)',
        'soft-lg': '0 12px 40px rgba(26,26,26,0.12)',
        'glow':    '0 0 60px rgba(255,79,0,0.15)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
