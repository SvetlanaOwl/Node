const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/users.json");

function loadUsers() {
    const raw = fs.readFileSync(filePath, "utf8");
    return JSON.parse(raw);
}

function saveUsers(users) {
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
}
function deleteUser(username) {
    const users = loadUsers();

    if (users[username]) {
        delete users[username];
        saveUsers(users);
        return true;
    }
    return false;
}

module.exports = { loadUsers, saveUsers, deleteUser };