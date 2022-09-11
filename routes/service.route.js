const express = require("express");

const router = express.Router();

router.get("/:id", (req, res) => {
  res.send("tools found with id");
});

router.post("/", (req, res) => {
  res.send("tools added");
});

module.exports = router;
