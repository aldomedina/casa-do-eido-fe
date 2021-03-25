module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["sofia-pro", "sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
    },

    extend: {
      backgroundImage: theme => ({
        "hero-pattern": "url('/img/folhas.png')",
      }),
      fontSize: {
        xxs: ".6rem",
        xxl: "1.7rem",
        xxxl: "2.4rem",
        "mobile-menu": "2.5rem",
      },
      colors: {
        beige: "#F8F6F4",
      },
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "75v": "75vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
      },
      width: {
        "10v": "10vw",
        "20v": "20vw",
        "30v": "30vw",
        "40v": "40vw",
        "50v": "50vw",
        "55v": "55vw",
        "60v": "60vw",
        "70v": "70vw",
        "75v": "75vw",
        "80v": "80vw",
        "90v": "90vw",
        "100v": "100vw",
      },
      minWidth: {
        36: "9rem",
        48: "12rem",
      },
      minHeight: {
        36: "9rem",
        48: "12rem",
      },
      maxWidth: {
        "10v": "10vw",
        "20v": "20vw",
        "30v": "30vw",
        "40v": "40vw",
        "50v": "50vw",
        "55v": "55vw",
        "60v": "60vw",
        "70v": "70vw",
        "75v": "75vw",
        "80v": "80vw",
        "90v": "90vw",
        "100v": "100vw",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
