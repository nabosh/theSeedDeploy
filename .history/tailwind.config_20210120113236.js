module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.js',
      'layouts/**/*.js',
      'pages/**/*.js',
      'plugins/**/*.js',
      'postcss.config.js'
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
