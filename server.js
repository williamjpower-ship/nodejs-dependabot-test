const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Dependabot Test Project",
    timestamp: new Date().toISOString()
  });
});

app.listen(3000, () => {
  console.log("Running on port 3000");
});
`