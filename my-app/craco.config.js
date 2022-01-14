// craco.config.js
module.exports = {
    style: {
      postcssOptions: { // https://github.com/facebook/create-react-app/issues/11777 helped resolve TypeError: match.loader.options.plugins is not a function
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
  }