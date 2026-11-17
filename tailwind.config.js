/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: '#641C32',
          dark: '#4A1222',
          deep: '#360B17',
          light: '#7A243D',
        },
        maroon: {
          DEFAULT: '#842B43',
          dark: '#682033',
          light: '#9E3752',
        },
        gold: {
          DEFAULT: '#C6A15B',
          light: '#ECC880',
          dark: '#9B752D',
          pale: '#F4E8C1',
          shimmer: '#FFE599',
        },
        ivory: {
          DEFAULT: '#FFF8EC',
          soft: '#FBF5E8',
          warm: '#F7EED8',
        },
        blush: {
          DEFAULT: '#EAD5CF',
          light: '#F5E8E4',
          dark: '#D8B8B0',
        },
        textDark: '#3E2925',
      },
      fontFamily: {
        devanagari: ['"Noto Serif Devanagari"', 'serif'],
        royalHindi: ['"Rozha One"', '"Noto Serif Devanagari"', 'serif'],
        yatra: ['"Yatra One"', 'cursive', 'serif'],
        cinzel: ['Cinzel', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #ECC880 0%, #C6A15B 50%, #9B752D 100%)',
        'royal-gradient': 'linear-gradient(180deg, #641C32 0%, #4A1222 100%)',
        'ivory-gradient': 'linear-gradient(180deg, #FFF8EC 0%, #F8EEDA 100%)',
      },
      boxShadow: {
        'royal': '0 10px 30px -5px rgba(100, 28, 50, 0.3)',
        'gold-glow': '0 0 25px rgba(198, 161, 91, 0.45)',
        'card-royal': '0 15px 35px rgba(62, 41, 37, 0.12), 0 5px 15px rgba(198, 161, 91, 0.08)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
