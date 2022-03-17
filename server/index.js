const express = require("express");
const indexRouter = require("./routes");
const db = require("./models");

const app = express();

app.use(express.json());
app.use("/", indexRouter);

db.Sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log("listening on port 5000");
  });
});

module.exports = app;
