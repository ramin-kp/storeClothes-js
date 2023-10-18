/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Dana: "dana regular",
        danaMedium: "dana medium",
        danaBold: "dana bold",
      },
    },
  },
  plugins: [],
};
