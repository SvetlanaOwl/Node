// routes/auth.js
const express = require("express");
const router = express.Router();

const users = require("../data/users");
const { makeToken, verifyToken } = require("../utils/auth");

// POST /auth/login
router.post("/login", (req, res) => {
    const { username, password } = req.body;

    const user = users[username];
    if (!user || user.password !== password) {
        return res.json({
            success: false,
            message: "Invalid username or password"
        });
    }

    // Create signed token
    const token = makeToken(username, user.role);

    res.json({
        success: true,
        token
    });
});

// POST /verify
router.post("/verify", (req, res) => {
    const { token } = req.body;
    const valid = verifyToken(token);

    res.json({
        valid: !!valid,
        role: valid?.role || null,
        username: valid?.username || null
    });
});

module.exports = router;