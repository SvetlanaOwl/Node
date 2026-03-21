// routes/email.js
const express = require("express");
const router = express.Router();
const { sendEmail } = require("../utils/emailService.js");

router.post("/", async (req, res) => {
  const { to, subject, html } = req.body;

  try {
    const result = await sendEmail({ to, subject, html });
    res.json({ success: true, result });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;