const target = "https://www.bitmex.com";
const origin = "https://observablehq.com";

const time = Date.now();
let served = 0;

require("http-proxy")
  .createServer({
    changeOrigin: true, 
    target,
    agent: null,
    headers: { target }
  })
 .on("proxyReq", (proxyReq, req, res) => {
  // console.log( proxyReq)


    // proxyReq.headers["access-control-allow-origin"] = "*";
  })
  .on("proxyRes", (proxyRes, req, res) => {
    proxyRes.headers["access-control-allow-origin"] = "*";
  })
  .listen(process.env.PORT);
