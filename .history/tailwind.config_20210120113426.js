module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    "./pages/**/*.js", 
    "./components/**/*.js", 
    "./static/**/*.vue",
    "./store/**/*.vue"
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
