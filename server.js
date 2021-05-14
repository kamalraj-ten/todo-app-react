var express = require("express");
var app = express();
var path = require("path");

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "build")));

app.listen(PORT, () => {
  console.log("listening to " + PORT);
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
