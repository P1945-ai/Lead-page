/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0F',
        surface: '#15151B',
        'surface-elevated': '#1E1E26',
        border: '#27272F',
        accent: '#5B6CFF',
        'accent-glow': '#7B8AFF',
        success: '#10B981',
        // Legacy (keep for any unreached code)
        navy: {
          950: '#03030A',
          900: '#06060F',
          800: '#0A0A1A',
        },
      },
      fontFamily: {
        sans:    ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Geist Variable"', '"Inter"', 'system-ui', 'sans-serif'],
        mono:    ['"Geist Mono Variable"', '"Courier New"', 'monospace'],
      },
      fontSize: {
        'display': ['72px', { lineHeight: '80px', letterSpacing: '-0.02em' }],
        'h1':      ['56px', { lineHeight: '64px', letterSpacing: '-0.015em' }],
        'h2':      ['40px', { lineHeight: '48px', letterSpacing: '-0.01em' }],
        'h3':      ['28px', { lineHeight: '36px', letterSpacing: '-0.005em' }],
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
        'card':   '12px',
        'button': '8px',
        'pill':   '999px',
      },
      boxShadow: {
        'sm-dark': '0 1px 2px rgba(0,0,0,0.4)',
        'md-dark': '0 4px 12px rgba(0,0,0,0.5)',
        'glow':    '0 0 40px rgba(91,108,255,0.25)',
        'glow-sm': '0 0 20px rgba(91,108,255,0.15)',
      },
      animation: {
        'mesh-a': 'mesh-drift-a 24s ease-in-out infinite',
        'mesh-b': 'mesh-drift-b 20s ease-in-out infinite',
        'mesh-c': 'mesh-drift-c 32s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
      },
      keyframes: {
        'mesh-drift-a': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-40px, 30px)' },
        },
        'mesh-drift-b': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(35px, -25px)' },
        },
        'mesh-drift-c': {
          '0%, 40%, 100%': { transform: 'translate(0, 0)' },
          '70%': { transform: 'translate(25px, -18px)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
