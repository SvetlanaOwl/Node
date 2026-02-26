//routes/supplements.js
const express = require("express");
    const router = express.Router();
  
    router.get("/", (req, res) => {
        const supplements = require("../data/listOfSupplements.json");
        res.json(supplements);
    });

    module.exports = router;