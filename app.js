const express = require("express");
const app = express();
const { getSnack } = require("./controllers/snacks");

app.get("/api/snacks/:id", getSnack);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ msg: "Internal server error" });
});

module.exports = app;
