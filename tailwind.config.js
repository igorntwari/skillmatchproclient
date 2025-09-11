/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00F87C",
        secondary: "#D9D9D9",
        cream: "#F7F7F7",
        forget: "#6941C6",
      },
      fontFamily: {
        "articulat-regular": ["Articulat-regular"],
        "articulat-semibold": ["Articulat-semibold"],
        "articulat-Extrabold": ["Articulat-Extrabold"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
