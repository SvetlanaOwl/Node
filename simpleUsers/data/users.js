// A – simple in-memory user store
//  хранилище пользователей.
const users = {
  alex: { password: "1234", role: "admin" },
  sveta: { password: "pass", role: "editor" },
  john: { password: "qwerty", role: "viewer" }
};

module.exports = users;