 import { displayAllCookies, createCookie, deleteCookie } from "./cookie.js";

 // Создание переменных для кнопок 
const btnCreate1 = document.getElementById('createCookie1');
const btnCreate2 = document.getElementById('createCookie2');
const btnDelete1 = document.getElementById('deleteCookie1');
const btnDelete2 = document.getElementById('deleteCookie2');


 // Обработчики кликов для кнопок
btnCreate1.addEventListener('click', () => {
createCookie('cookie1', 'value1', 7); 
displayAllCookies();
});

btnCreate2.addEventListener('click', () => {
createCookie('cookie2', 'value2', 10); 
displayAllCookies();
});

btnDelete1.addEventListener('click', () => {
deleteCookie('cookie1');
displayAllCookies();
});

btnDelete2.addEventListener('click', () => {
deleteCookie('cookie2');
displayAllCookies();
});

export {
  btnCreate1,
  btnCreate2,
  btnDelete1,
  btnDelete2
};
