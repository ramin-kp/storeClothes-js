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
      container: {
        center: true,
        padding:{
          DEFAULT:"1rem",
          
        }
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
