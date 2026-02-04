// routes/users.js
const express = require("express");
const router = express.Router();
const users = require("../data/users");
const { verifyToken } = require("../utils/auth");

// Users route (admin only) - маршрут пользователей (только для администраторов)
router.post("/", (req, res) => {
  const { token } = req.body;
  const valid = verifyToken(token);

  if (!valid || valid.role !== "admin") {
    return res.status(403).json({ error: "Forbidden" });
  }

  res.json(users);
});

// POST /users/change-password - изменение пароля пользователя (только для администраторов)
router.post("/change-password", (req, res) => {
  const { token, username, newPassword } = req.body;

  const valid = verifyToken(token);

  // Only admins can change passwords
  if (!valid || valid.role !== "admin") {
    return res.status(403).json({ error: "Forbidden" });
  }

  // Check if user exists
  if (!users[username]) {
    return res.status(404).json({ error: "User not found" });
  }

  // Update password
  users[username].password = newPassword;

  res.json({
    success: true,
    message: `Password updated for user: ${username}`
  });
});

/*const { loadUsers, saveUsers } = require("../utils/userStore");

router.post("/change-password", (req, res) => {
  const { token, username, newPassword } = req.body;

  const valid = verifyToken(token);
  if (!valid || valid.role !== "admin") {
    return res.status(403).json({ error: "Forbidden" });
  }

  const users = loadUsers();

  if (!users[username]) {
    return res.status(404).json({ error: "User not found" });
  }

  users[username].password = newPassword;
  saveUsers(users);

  res.json({
    success: true,
    message: `Password updated for user: ${username}`
  });
});*/

module.exports = router;