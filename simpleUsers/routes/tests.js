//routes/tests.js
const express = require("express");
    const router = express.Router();
  
    router.get("/", (req, res) => {
        const tests = require("../data/tests.json");
        res.json(tests);
    });

    module.exports = router;