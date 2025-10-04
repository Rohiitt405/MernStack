const express = require('express');
const router = express.Router();
const ContactForm = require("../Controllers/ContactController");

router.route("/contact").post(ContactForm);

module.exports = router;