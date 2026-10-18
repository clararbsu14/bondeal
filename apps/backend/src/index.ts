import { createServer } from "./server.js";

const port = Number(process.env.PORT) || 3000;

const app = createServer();

app.listen(port, () => {
  console.log(`BETSY API écoute sur http://localhost:${port}`);
  console.log(`Santé : http://localhost:${port}/health`);
});
