const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "input.txt");

const data = fs.createReadStream(filePathBB);

data.on("data", (chunk) => {
  console.log("chunks are loading", chunk);
});

data.on("end", () => {
  console.log("Stream ended");
});
