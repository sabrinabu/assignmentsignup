const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware('/test',{
      target: "https://test.nexisltd.com:8080",
      changeOrigin: true,
    }
     
    )
  );

  app.use(
    "/api2",
    createProxyMiddleware('/login',{
      target: "https://test.nexisltd.com:8080",
      changeOrigin: true,
    })
  );
};
