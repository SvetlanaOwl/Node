//routes/avatar.js - Avatar upload route
const express = require("express");
const router = express.Router();
const multer = require("multer");//Upload files (multipart/form-data) - part of Node ecosystem
const { loadUsers, saveUsers } = require("../utils/userStore");
const { verifyToken } = require("../utils/auth");
const upload = multer({ dest: "public/avatars/" });

router.post("/upload-avatar", upload.single("avatar"), (req, res) => {
    const token = req.body.token;
    const valid = verifyToken(token);
    if (!valid) return res.json({ success: false });

    const users = loadUsers();
    const user = users[valid.username];

    user.avatar = "/avatars/" + req.file.filename;
    saveUsers(users);

    res.json({ success: true, avatar: user.avatar }); 
});

module.exports = router;