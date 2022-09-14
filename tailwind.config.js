/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#efeee5',
        'secondary': '#274546',
        'action': '#f99a49'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'jost': ['Jost', 'sans-serif'],
      },
      backgroundImage: {
        'hero-bg': "url('/src/imgs/hero_bg.png')",
      }
    },
  },
  plugins: [],
};
