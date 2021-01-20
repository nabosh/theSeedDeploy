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
      'post.js'
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
