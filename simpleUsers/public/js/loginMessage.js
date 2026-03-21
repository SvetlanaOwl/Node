import { getCookie } from './manageCookies.js';
export function loginMessage(elementId, word1, word2, interval = 1000) {
  const el = document.getElementById(elementId);
  
  const username = getCookie('username');
  let toggle = true;
  

  setInterval(() => {
    el.textContent = toggle ? `${word1} ${username}` : word2;
    toggle = !toggle; 
  }, interval);
}