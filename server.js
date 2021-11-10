const target = "https://studychemistry.org";

require("http-proxy")
  .createServer({
    changeOrigin: true,
    target,
    agent: null,
    headers: { target }
  })
  .on("proxyReq", (proxyReq, req, res) => {
    proxyReq.setHeader("origin", target);
  })
  .on("proxyRes", (proxyRes, req, res) => {
    if (req.headers["access-control-request-method"]) {
      res.setHeader(
        "access-control-allow-methods",
        req.headers["access-control-request-method"]
      );
    }

    if (req.headers["access-control-request-headers"]) {
      res.setHeader(
        "access-control-allow-headers",
        req.headers["access-control-request-headers"]
      );
    }

    if (req.headers.origin) {
      res.setHeader("access-control-allow-origin", req.headers.origin);
      res.setHeader("access-control-allow-credentials", "true");
    }
  })
  .listen(process.env.PORT);
