const express = require("express");
const router = express.Router();
const dbo = require("../db/conn");

router.post("/", function (req, res) {
    
    res.json({"access": req.body.passcode == "passcode"});
});

module.exports = router;