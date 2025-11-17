const express = require("express");

const router = express.Router();

router.get("/UserName", (req, res) => {
  res.send("UserName route");
});

router.get("/profile", (req, res) => {
  res.send("Profile Page");
});

module.exports = router;
