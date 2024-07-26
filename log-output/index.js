import { v4 } from "uuid";

const RANDOM_NUMBER = v4();

function logOutput() {
  console.log(`${new Date().toISOString()} ${RANDOM_NUMBER}`);
}

logOutput();

setInterval(() => {
  logOutput();
}, 5000);
