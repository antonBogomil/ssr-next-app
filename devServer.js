const proxyMiddleware = require('http-proxy-middleware');
const devProxy = {
    '/api': {
        target: 'https://icecat.biz',
        pathRewrite: {'^/api': ''},
        changeOrigin: true,
    },
};

function devConfig(server) {
    Object.keys(devProxy).forEach(function (context) {
        server.use(proxyMiddleware(context, devProxy[context]))
    })
}

module.exports = devConfig;