// routes/auth.js
const express = require("express");
const router = express.Router();
const { loadUsers } = require("../utils/userStore");

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

    if (!valid) {
        return res.json({ valid: false });
    }

    const users = loadUsers();
    const user = users[valid.username];

    res.json({
        valid: true,
        role: valid.role,
        username: valid.username,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        description: user.description,
        avatar: user.avatar || null // Return avatar or null if not set
    });
});

module.exports = router;