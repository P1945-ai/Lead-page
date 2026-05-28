/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#03030A',
          900: '#06060F',
          800: '#0A0A1A',
          700: '#0F0F28',
          600: '#151535',
        },
        'electric-blue': '#3B82F6',
        'electric-violet': '#7C3AED',
        'electric-cyan': '#06B6D4',
        'soft-orange': '#F97316',
        'glow-blue': '#60A5FA',
        'glow-violet': '#A78BFA',
        'glow-orange': '#FB923C',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'float-reverse': 'float-reverse 8s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 10s ease infinite',
        'spin-slow': 'spin 25s linear infinite',
        'fade-in-up': 'fade-in-up 0.7s ease forwards',
        'slide-in-right': 'slide-in-right 0.7s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-24px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'radial-gradient(ellipse at 20% 50%, rgba(59,130,246,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(124,58,237,0.15) 0%, transparent 50%)',
      },
    },
  },
  plugins: [],
};
