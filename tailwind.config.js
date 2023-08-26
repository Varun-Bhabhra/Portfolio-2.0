/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#efeee5",
        secondary: "#274546",
        action: "#f99a49",
        extra: "#6CE5B1",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        jost: ["Jost", "sans-serif"],
      },
      backgroundImage: {
        "services-bg": "url('/src/img/services_bg.svg')",
        "skills-bg": "url('/src/img/skills_bg.svg')",
        "about-bg": "url('/src/img/about_bg.svg')",
        "testimonials-bg": "url('/src/img/testimonials_bg.svg')",
        "portfolio-bg": "url('/src/img/portfolio_bg.svg')",
        "newcta-bg": "url('/src/img/newcta_bg.svg')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
