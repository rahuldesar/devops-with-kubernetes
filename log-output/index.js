import express from "express";
import { v4 } from "uuid";

const app = express();
const port = 3000;

function generateTimestampUUID() {
  const RANDOM_NUMBER = v4();
  return `${new Date().toISOString()} ${RANDOM_NUMBER}`;
}

app.get("/", (_req, res) => {
  res.send(generateTimestampUUID());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
