// tailwind.config.js
module.exports = {
  purge: {
    content: ["./views/**/*.tsx", "./pages/**/*.tsx", "./components/**/*.tsx"],
    safelist: ["sf-bold", "sf-heavy", "sf-medium", "sf-semibold"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        "2.5xl": "1.75rem",
        "3.5xl": "2rem",
      },
      textColor: {
        gold: "#B8997B",
        meddarkblue: "#52679A",
        darkblue: "#2B2571",
        lightdarkgrey: "#868686",
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
