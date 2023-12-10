import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { createProxyMiddleware } from "http-proxy-middleware";

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());

app.use(
  "*",
  createProxyMiddleware({
    target: process.env.SERVER_URL,
    changeOrigin: true,
  })
);

app.listen(port);
