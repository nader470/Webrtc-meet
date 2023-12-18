import { createProxyMiddleware } from 'http-proxy-middleware';
import { Express } from 'express';

const setupProxy = (app: Express) => {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8000',
      changeOrigin: true,
    })
  );
};

export default setupProxy;