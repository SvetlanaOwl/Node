//routes/users.js
const express = require("express");
    const router = express.Router();
    const users = require("../data/users");
    const { verifyToken } = require("../utils/auth");

    //users route (admin only) - маршрут пользователей (только для администраторов)
    router.post("/", (req, res) => {
        const { token } = req.body;
        const valid = verifyToken(token);

        if (!valid || valid.role !== "admin") {
            return res.status(403).json({ error: "Forbidden" });
        }

        res.json(users);
    });

    module.exports = router;