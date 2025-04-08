const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/huggingface',
    createProxyMiddleware({
      target: 'https://api-inference.huggingface.co',
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        '^/api/huggingface': '',
      },
      onProxyRes: function (proxyRes, req, res) {
        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
      },
      onError: function(err, req, res) {
        console.error('Proxy Error:', err);
        res.writeHead(500, {
          'Content-Type': 'text/plain',
        });
        res.end('Proxy Error: ' + err.message);
      }
    })
  );
}; 