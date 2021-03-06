// tailwind.config.js
module.exports = {
  purge: {
    content: ["./views/**/*.tsx", "./pages/**/*.tsx", "./components/**/*.tsx"],
    safelist: [
      "sf-bold",
      "sf-heavy",
      "sf-medium",
      "sf-semibold",
      "section-padding-x",
      "text-subtitle",
      "portfolio-container",
    ],
  },
  corePlugins: {
    // container: false,
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xl: "1200px",
        xxl: "1360px",
        xlg: "1440px",
        xxlg: "1536px",
        hd: "1920px",
        xhd: "2560px",
      },
      fontSize: {
        "1.5xl": "1.33rem",
        "2.5xl": "1.75rem",
        "3.5xl": "2rem",
        "4.5xl": "2.5rem",
        "4.75xl": "2.75rem",
        "5.5xl": "3.5rem",
        "6.5xl": "4rem",
      },
      maxWidth: {
        xxs: "16rem",
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
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
