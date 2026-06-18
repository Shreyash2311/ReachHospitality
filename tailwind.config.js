/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A1628',
          light: '#0F2040',
          dark: '#060E1A',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#D4B86A',
          dark: '#A8862E',
        },
        ivory: {
          DEFAULT: '#F8F4EF',
          dark: '#EDE6DC',
        },
        'hotel-slate': '#8A9BB0',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

