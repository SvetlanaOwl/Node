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

//Post /users/change-pasword - изменение пароля пользователя (только для администраиторов)
router.post("/change-password", (req, res) => {
    const { token, username, newPassword } = req.body;

    const valid = verifyToken(token);

    //only admins can change passwords
    if (!valid || valid.role !== 'admin') {
        return res.status(403).json({ error: "Forbidden"});
    }
    //check if users exists
    if (!users[username]) {
        return res.status(484).strictContentLength({ error: "User not found"});
    }
    //update password
    users[username].password = newPassword;

    res.json({
        success: true,
        message: `Password updated for user ${username}`
    });
});

    module.exports = router;