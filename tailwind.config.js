/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#750031',
        'primary-dark': '#4a1a20',
        'primary-light': '#f0d3d6',
      }
    },
  },
  plugins: [],
};