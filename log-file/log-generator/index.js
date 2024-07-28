import { v4 } from "uuid";
import fs from "node:fs";

const content = "Some content!";

function generateTimestampUUID() {
  const RANDOM_NUMBER = v4();
  return `${new Date().toISOString()} ${RANDOM_NUMBER}`;
}

function writeLogfile() {
  const output = generateTimestampUUID();
  fs.writeFile("./files/file.txt", output, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(output);
    }
  });
}

writeLogfile();
setInterval(() => {
  writeLogfile();
}, 5000);
