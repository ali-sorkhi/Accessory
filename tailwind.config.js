module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      darkred: "#d90429",
      lightred: "#ef233c",
      white: "#edf2f4",
      lightgray: "#8d99ae",
      darkgray: "#2b2d42",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
