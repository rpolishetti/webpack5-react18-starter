module.exports = {
  // Add you postcss configuration here
  // Learn more about it at https://github.com/webpack-contrib/postcss-loader#config-files
  plugins: {
    'tailwindcss/nesting': {},
    'tailwindcss': {},
    autoprefixer: {},
    'postcss-preset-env': {
      features: { 'nesting-rules': false },
    }
  }
};
