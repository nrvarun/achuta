// tailwind.config.js
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        "3.5xl": "2rem",
      },
      container: {
        screens: {
          sm: "100%",
          md: "90%",
          lg: "992px",
          xl: "1200px",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
