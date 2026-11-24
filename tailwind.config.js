/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#142E25',
          50: '#F2F5F1',
          100: '#DDE5DC',
          200: '#B9C9B6',
          300: '#8CA48A',
          400: '#5C7D60',
          500: '#3A5C42',
          600: '#2A4638',
          700: '#142E25',
          800: '#0F241D',
          900: '#0A1A15',
        },
        gold: {
          DEFAULT: '#C9A35C',
          50: '#FBF7EC',
          100: '#F3E9D2',
          200: '#E5D3A8',
          300: '#D9BE87',
          400: '#C9A35C',
          500: '#B18A43',
          600: '#8F6E33',
          700: '#6D5426',
        },
        ivory: {
          DEFAULT: '#F8F5EC',
          50: '#FCFAF4',
          100: '#F8F5EC',
          200: '#F0EADC',
        },
        sage: {
          DEFAULT: '#85977A',
          100: '#E7EBE2',
          200: '#CFD8C8',
          300: '#AEBBA3',
          400: '#85977A',
          500: '#6A7C60',
          600: '#526048',
        },
        charcoal: '#202420',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 8px 30px rgba(20,46,37,0.08)',
        cardHover: '0 18px 44px rgba(20,46,37,0.16)',
        drawer: '-12px 0 48px rgba(20,46,37,0.22)',
      },
      keyframes: {
        ticker: {
          '0%, 24%': { opacity: '1', transform: 'translateY(0)' },
          '33%, 90%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '0', transform: 'translateY(0)' },
        },
        tickerB: {
          '0%, 24%': { opacity: '0', transform: 'translateY(8px)' },
          '33%, 57%': { opacity: '1', transform: 'translateY(0)' },
          '66%, 100%': { opacity: '0', transform: 'translateY(0)' },
        },
        tickerC: {
          '0%, 57%': { opacity: '0', transform: 'translateY(8px)' },
          '66%, 90%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-2.5deg)' },
          '50%': { transform: 'rotate(2.5deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'ticker-a': 'ticker 9s ease-in-out infinite',
        'ticker-b': 'tickerB 9s ease-in-out infinite',
        'ticker-c': 'tickerC 9s ease-in-out infinite',
        sway: 'sway 7s ease-in-out infinite',
        'sway-slow': 'sway 10s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s ease-out both',
      },
    },
  },
  plugins: [],
};
