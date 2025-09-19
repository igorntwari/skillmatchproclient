/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00F87C",
        second_primary: "#00F87C66",
        auth_border: "#05713BE5",
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
