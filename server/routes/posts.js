const express = require("express");
const router = express.Router();
const { Posts } = require("../models");

router.get("/", async (req, res) => {
  const listAllPosts = await Posts.findAll();
  res.json(listAllPosts);
});

router.post("/", async (req, res) => {
  const post = req.body;
  console.log(post);
  await Posts.create(post);
  res.send("post created successfully");
});

module.exports = router;
