import express from "express";

const app = express();
const port = 3000;

let count = 0;

app.get("/pingpong", (_req, res) => {
  count++;
  res.send(`pong ${count}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
