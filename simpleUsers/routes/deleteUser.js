//routes/deleteUser.js
const express = require("express");
const router = express.Router();

const { loadUsers, deleteUser } = require("../utils/userStore");
const { verifyToken } = require("../utils/auth");

router.post("/users/delete", (req, res) => {
    const { token, username } = req.body;

    const valid = verifyToken(token);
    if (!valid || valid.role !== "admin") {
        return res.status(403).json({ success: false, message: "Unauthorized" });
    }
    const users = loadUsers();
    if (!users[username]) {
        return res.status(404).json({ success: false, message: "User not found" });
    }

    deleteUser(username); //Delete user by username

    res.json({ success: true, message: "User deleted successfully" });
});

module.exports = router;