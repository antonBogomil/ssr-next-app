const withPlugins = require('next-compose-plugins');
const sass = require('@zeit/next-sass');
const css = require('@zeit/next-css');
const { PHASE_PRODUCTION_BUILD } = require('next-server/constants');
const images = require('next-images');

module.exports = withPlugins([
  [sass, {
    cssModules: true,
    cssLoaderOptions: {
      localIdentName: '[local]',
    },
    // TODO Production config
    // [PHASE_PRODUCTION_BUILD] : {
    //     cssLoaderOptions: {
    //         localIdentName: '[hash:base64:8]',
    //     },
    // }
  }],
  css,
  images,
]);

// module.exports = withSass({
//     cssModules: true,
//     cssLoaderOptions: {
//         importLoaders: 1,
//         localIdentName: "[local]",
//     }
// })
