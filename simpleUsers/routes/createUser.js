const express = require("express");
const router = express.Router();
const { loadUsers, saveUsers } = require("../utils/userStore");
const { verifyToken } = require("../utils/auth");
    router.post("/users/create", (req, res) => {
        const { 
            token, 
            username, 
            password,
            role,
            firstName,
            lastName,
            email, 
            description
    } = req.body;
const valid = verifyToken(token);
    if (!valid || valid.role !== "admin") {
        return res.json({ success: false, message: "Unautorized" });
}
const users = loadUsers();
    if (users[username]) {
        return res.json({ success: false, message: "User already exists" });
    }
    users[username] = {
        password,
        role, 
        firstName,
        lastName,
        email,
        description,
        avatar: null
    };
    saveUsers(users);
        res.json({
            success: true });
});

module.exports = router;