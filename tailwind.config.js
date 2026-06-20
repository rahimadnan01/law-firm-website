/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0A0F1E',
          800: '#0D1529',
          700: '#111d3c',
          600: '#162348',
          500: '#1E3163',
        },
        gold: {
          300: '#E8C97A',
          400: '#D4A943',
          500: '#C49A2A',
          600: '#A67C1C',
        },
        slate: {
          50: '#F8F9FC',
          100: '#F1F3F8',
          200: '#E2E6EF',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
    },
  },
  plugins: [],
}
