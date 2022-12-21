const express = require("express");
const {sendEmail, contactMe} = require("./../controllers/sendEmail.js");
const router = express.Router();

router.post("/c", sendEmail);
router.post("/contact", contactMe);

module.exports = router;
