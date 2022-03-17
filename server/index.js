const express = require("express");
const indexRouter = require("./routes");

const app = express();

app.use("/", indexRouter);

app.listen(5000, () => {
  console.log("listening on port 5000");
});

module.exports = app;
