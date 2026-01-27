const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// A – simple in-memory user store
//  хранилище пользователей.
const users = {
  alex: { password: "1234", role: "admin" },
  sveta: { password: "pass", role: "editor" },
  john: { password: "qwerty", role: "viewer" }
};

//Middleware
// Промежуточное прграммное обеспечение
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// B – login route
// маршрут входа в систему
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users[username];

    if (user && user.password === password) {
      return res.json({ 
        success: true, 
        role: user.role,
        message: "Login successful" 
      });
    }
  
  res.json({ success: false, message: "Invalid username or password" });
});

// C – start server
// запускаем сервер
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});