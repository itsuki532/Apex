const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");

router.get("/:platform/:gamertag", (req, res) => {
  console.log(req.params.platform, req.params.gamertag);
  res.send("Hello go");
});

module.exports = router;
