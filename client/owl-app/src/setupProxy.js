const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/questions',
    createProxyMiddleware({
      target: 'https://2e7f-124-61-224-204.ngrok-free.app',
      changeOrigin: true
    })
  );
};