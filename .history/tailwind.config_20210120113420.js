module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    "./pages/**/*.js", 
    "./components/**/*.js", 
    "./plugins/**/*.vue",
    "./static/**/*.vue",
    "./store/**/*.vue"
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
