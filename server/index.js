const express = require("express");
const postsRouter = require("./routes/posts");
const db = require("./models");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/posts", postsRouter);

db.sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log("listening on port 5000");
  });
});

module.exports = app;
