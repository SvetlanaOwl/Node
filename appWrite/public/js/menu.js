import { databases, query, account, MDBID, MTID } from "./appwriteClient.js";

export async function loadMenu() {
    const result = await databases.listDocuments(
        MDBID,
        MTID,
        [
            query.equal("visible", true),
            query.orderAsc("order")
        ]
    );
    console.log("Menu items loaded:", result.documents);
}

//Function to filter menu items based on user roles  | Фильтрация меню по ролям пользователя
function filterMenuByRole(menuItems, userRoles) { //UserRoles is an array of roles assigned to the user | userRoles — это массив ролей, присвоенных текущему пользователю
    return menuItems.filter(item => //If the menu item has no roles defined, it`s visible to everyone | Если у пункта меню не указаны роли — он виден всем пользователям
        item.roles.some(role => userRoles.includes(role)) // If the menu item has roles defined, check if the user has at least one of those roles |  
        // Если у пункта меню указаны роли — показываем только если у пользователя есть хотя бы одна из этих ролей
    );
}
// Функция для рендеринга меню в шапке сайта с учётом ролей пользователя
 export async function renderHeader() { // Получаем текущего пользователя
    const user = await account.get();// Предполагается, что пользователь авторизован и у него есть поле 'prefs.roles',
    // которое содержит массив ролей
    const userRoles = user.prefs.roles || [];// Извлекаем роли пользователя (если поле отсутствует — используем пустой массив)
    const menuItems = await loadMenu(); // Загружаем пункты меню из базы данных
    const allowed = filterMenuByRole(menuItems, userRoles); // Фильтруем пункты меню в зависимости от ролей пользователя
    const nav = document.querySelector("#header-nav");// Находим элемент навигации в шапке
    // Предполагается, что в HTML есть <nav id="header-nav"></nav>
    nav.innerHTML = allowed // Генерируем HTML для разрешённых пунктов меню
        .map(item => `<a href="${item.href}">${item.label}</a>`)
        .join(""); // Объединяем все ссылки в одну строку
 }
 