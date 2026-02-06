//simpleUers/routes/header.js
//Route for fetching header items - Маршрут для полученияэлементов заголовков

const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.get("/", (req, res) => {
    const filePath = path.join(__dirname, "../data/header.json");
    const raw = fs.readFileSync(filePath, utf8);
    const items = JSON.parse(raw);
    res.json(items)
});

module.exports = router;