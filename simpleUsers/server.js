const express = require("express");
const path = require("path");
const crypto = require("crypto"); //crypto module for hashing
const app = express();
const PORT = 3000;

// A – simple in-memory user store
//  хранилище пользователей.
const users = {
  alex: { password: "1234", role: "admin" },
  sveta: { password: "pass", role: "editor" },
  john: { password: "qwerty", role: "viewer" }
};

// Signed token helpers
// помощники для подписанных токенов

const SECRET = "SUPER_SECRET_KEY";

function makeToken(username, role) {
    const data = `${username}|${role}`;
    const sig = crypto.createHmac("sha256", SECRET).update(data).digest("hex");
    return `${data}|${sig}`;
}

function verifyToken(token) {
    const [username, role, sig] = token.split("|");
    const check = crypto.createHmac("sha256", SECRET).update(`${username}|${role}`).digest("hex");
    return sig === check ? { username, role } : null;
}

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
      const token = makeToken(username, user.role);
        return res.json({ success: true, token });
    }

    res.json({ success: false, message: "Invalid username or password" });
});

// Verify route
// маршрут проверки
app.post("/verify", (req, res) => {
    const { token } = req.body;
    const valid = verifyToken(token);
    res.json({ valid: !!valid, role: valid?.role });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

