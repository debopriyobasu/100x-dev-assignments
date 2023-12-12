const fs = require("fs");
fs.readFile("file.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const modifiedFileContent = data.replace(/\s+/g, " ").trim();
  fs.writeFile("file.txt", modifiedFileContent, "utf-8", (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`File written successfully with data: ${modifiedFileContent}`);
  });
});
