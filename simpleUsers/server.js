const express = require("express"); // express framework
const path = require("path"); // path module
const app = express(); 
const PORT = 3000;

// MIDDLEWARE - Промежуточное программное обеспечение
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// ROUTE MOUNTS - Закрепление маршрутов
const seacraftsRoute = require("./routes/seacrafts");
const usersRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const statusRoute = require("./routes/status");
const headerRoute = require("./routes/header");
const avatarRoutes = require("./routes/avatar");
const testsRoutes = require("./routes/tests");
const supplementsRoutes = require("./routes/supplements");
const footerRoutes = require("./routes/footer");


app.use("/seacrafts", seacraftsRoute); // Mount seacrafts route - Закрепить маршрут морских судов
app.use("/users", usersRoute); // Mount users route - Закрепить маршрут пользователей
app.use("/", authRoute); // Mount auth route - Закрепить маршрут аутентификации
app.use("/status", statusRoute); // Mount status route - Закрепить маршрут статуса
app.use("/header", headerRoute); //Mount header route - закрепить маршрут заголовка
app.use("/", avatarRoutes); //Mount avatar upload route - закрепить маршрут загрузки аватара
app.use("/tests", testsRoutes); // Mount tests route - Закрепить маршрут теста
app.use("/supplements", supplementsRoutes);
app.use("/footer", footerRoutes);

// Start server - запуск сервера
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});