const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,jsx}","./components/**/*.{js,jsx}","./Layout/**/*.{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      "first":"#D8E3E7",
      "second":"#52C4D3",
      "third":"#136F82",
      "fourth":"#142D34",
      "fifth":"#B7DFE7",
      "white":"#ffffff"
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      width: {
        img: "320px",
        photo:"480px",
        card: "600px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
}
