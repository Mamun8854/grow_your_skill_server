const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Learning API running");
});

app.listen(port, () => {
  console.log(`Learning API running on port ${port}`);
});
