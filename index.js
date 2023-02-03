const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 9100;

const app = express();

app.use(express.static(path.join(__dirname, "front", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "front", "build", "index.html"));
});

app.listen(PORT, () => console.log(`View server has started at ${PORT}`));
