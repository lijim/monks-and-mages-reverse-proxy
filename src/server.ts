import { createProxyMiddleware, Options } from 'http-proxy-middleware';
import express from 'express';

export const server = express();

// API server
const apiServerOptions: Options = {
  target:
    process.env.NODE_ENV === 'dev'
      ? 'http://localhost:5001'
      : 'https://monks-and-mages-db.onrender.com',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '/',
  },
};

const apiServerProxy = createProxyMiddleware(apiServerOptions);

server.use('/api', apiServerProxy);

const gameServerOptions: Options = {
  target:
    process.env.NODE_ENV === 'dev'
      ? 'http://localhost:3000'
      : 'https://monks-and-mages.onrender.com/',
  changeOrigin: true,
  ws: true,
};

const gameServerProxy = createProxyMiddleware(gameServerOptions);

server.use('/', gameServerProxy);
