//routes/footer.js
const express = require("express");
    const router = express.Router();
  
    router.get("/", (req, res) => {
        const footer = require("../data/footer.json");
        res.json(footer);
    });

    module.exports = router;