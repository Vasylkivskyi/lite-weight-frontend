const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const path = require('path');
module.exports = withCSS(
  withSass({
    webpack(config, options) {
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
          },
        },
      });

      config.resolve.alias.Components = path.resolve(__dirname, 'src/components/');
      config.resolve.alias.Utils = path.resolve(__dirname, 'src/utils/');
      config.resolve.alias.Constants = path.resolve(__dirname, 'src/constants/');
      config.resolve.alias.ReduxModules = path.resolve(__dirname, 'src/redux_modules');
      config.resolve.alias.styles = path.resolve(__dirname, 'styles/');
      config.resolve.alias.static = path.resolve(__dirname, 'public/');
      config.resolve.alias.utils = path.resolve(__dirname, 'src/utils');
      config.resolve.extensions.push('.png');

      return config;
    },
  }),
);
