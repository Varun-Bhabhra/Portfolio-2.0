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
        primary: "#ffffff",
        secondary: "#171717",
        action: "#171717",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        jost: ["Jost", "sans-serif"],
        pretendard: ["Pretendard", "sans-serif"],
      },
      backgroundImage: {
        "services-bg": "url('/src/img/services_bg.svg')",
        "skills-bg": "url('/src/img/skills_bg.svg')",

        "newcta-bg": "url('/src/img/newcta_bg.svg')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
