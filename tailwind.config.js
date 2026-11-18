/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // NEW: Deep Navy Celestial Theme
        navy: {
          DEFAULT: '#0D1B3E',
          dark: '#070E20',
          mid: '#152347',
          light: '#1E3163',
        },
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
        rose: {
          wedding: '#C8506A',
          soft: '#E8899A',
          dark: '#9B2D45',
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
        'gold-gradient': 'linear-gradient(135deg, #F0D060 0%, #D4AF37 50%, #A8860A 100%)',
        'royal-gradient': 'linear-gradient(180deg, #0D1B3E 0%, #070E20 100%)',
        'celestial-gradient': 'linear-gradient(135deg, #0D1B3E 0%, #1A0F2E 50%, #0D1B3E 100%)',
        'gold-shine': 'linear-gradient(90deg, transparent 0%, #D4AF37 50%, transparent 100%)',
      },
      boxShadow: {
        'royal': '0 10px 40px -5px rgba(13, 27, 62, 0.6)',
        'gold-glow': '0 0 30px rgba(212, 175, 55, 0.5)',
        'gold-glow-lg': '0 0 60px rgba(212, 175, 55, 0.3)',
        'card-dark': '0 20px 60px rgba(7, 14, 32, 0.8), 0 0 0 1px rgba(212, 175, 55, 0.2)',
        'card-royal': '0 15px 35px rgba(62, 41, 37, 0.12), 0 5px 15px rgba(198, 161, 91, 0.08)',
        'inner-gold': 'inset 0 0 20px rgba(212, 175, 55, 0.1)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite',
        'rise': 'rise 8s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        rise: {
          '0%': { transform: 'translateY(100vh)', opacity: '0' },
          '10%': { opacity: '0.6' },
          '90%': { opacity: '0.4' },
          '100%': { transform: 'translateY(-20vh)', opacity: '0' },
        },
      }
    },
  },
  plugins: [],
}
