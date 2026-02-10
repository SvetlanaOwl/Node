// utils/auth.js
// Signed token helpers - помощники для подписанных токенов

const crypto = require("crypto");
const SECRET = "SUPER_SECRET_KEY";

function makeToken(username, role) {
    const data = `${username}|${role}`;
    const sig = crypto.createHmac("sha256", SECRET).update(data).digest("hex");
    return `${data}|${sig}`;
}

//Token verification - проверка токена
function verifyToken(token) {
    if (!token || typeof token !== "string") return null;

    const [username, role, sig] = token.split("|");

    const check = crypto
    .createHmac("sha256", SECRET)
    .update(`${username}|${role}`)
    .digest("hex");
    
    return sig === check ? { username, role } : null;
}

module.exports = { makeToken, verifyToken };