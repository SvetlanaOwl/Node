export function setCookie(name, value, second) {
  const expires = new Date();
  //expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  expires.setTime(expires.getTime() + second * 1000);
  document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
}

// Функция для получения cookie
export function getCookie(name) {
  const wordName = `${name}=`;
    return document.cookie.slice(wordName.length);
  
}
