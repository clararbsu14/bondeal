import express from "express";
import { healthRouter } from "./routes/health.js";
import { placeholdersRouter } from "./routes/placeholders.js";

export function createServer() {
  const app = express();

  app.use(express.json());

  app.use(healthRouter);
  app.use(placeholdersRouter);

  return app;
}
