//Функция для отображения всех cookies
export function displayAllCookies() {
    document.getElementById('showButtons').innerHTML = document.cookie;
}

// Функция для создания cookie
export function createCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
}

// Функция для удаления cookie
export function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}

