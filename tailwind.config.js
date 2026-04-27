/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#EEF1F7',
          100: '#C7D0E5',
          200: '#9AAFD4',
          300: '#6D8EC3',
          400: '#3F6DB2',
          500: '#1A4F9E',
          600: '#143D7F',
          700: '#0F2D60',
          800: '#0D2040',
          900: '#081430',
          950: '#040A1A',
        },
        amber: {
          300: '#FBCC6E',
          400: '#F8B83D',
          500: '#F5A623',
          600: '#D4880A',
          700: '#A86700',
        },
        'off-white': '#F7F6F3',
      },
      fontFamily: {
        krona:   ['"Krona One"', 'sans-serif'],
        archivo: ['Archivo', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['4.5rem',  { lineHeight: '1.05' }],
        '8xl': ['6rem',    { lineHeight: '1' }],
        '9xl': ['8rem',    { lineHeight: '1' }],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter:  '-0.02em',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
