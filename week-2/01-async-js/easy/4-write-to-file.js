const fs = require("fs");

fs.writeFile("file.txt", "Hello, World!", "utf8", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File written successfully");
});
