module.exports = () => ({
  plugins: {
    'postcss-easy-import': { extensions: '.pcss' },
    'postcss-nesting': {},
    'postcss-custom-media': {},
    'postcss-selector-not': {},
    'postcss-discard-comments': {},
    'autoprefixer': {},
  }
});
