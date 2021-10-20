// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        "2.5xl": "1.75rem",
        "3.5xl": "2rem",
      },
      container: {
        screens: {
          sm: "100%",
          md: "90%",
          lg: "992px",
          xl: "1200px",
          "2xl": "1440px",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
