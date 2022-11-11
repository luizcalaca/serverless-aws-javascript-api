const serverless = require("serverless-http");
const express = require("express");
const router = require("./src/infrastructure/routes");
const app = express();

app.use(express.json())
app.use("/user", router);

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
