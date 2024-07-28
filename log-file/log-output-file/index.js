import express from "express";
import fs from "node:fs/promises";

const app = express();
const port = 3000;

async function readContent() {
  try {
    let data = await fs.readFile("./files/file.txt", "utf8");
    return data;
  } catch (e) {
    console.error("File read failed");
    throw e;
  }
}

async function startServer() {
  try {
    let data = await readContent();

    app.get("/", (_req, res) => {
      res.send(data);
    });

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.error("Server Start failed");
  }
}

startServer();
