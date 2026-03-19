import { getCookie } from './setCookie.js';
export function loginMessage(elementId, word1, word2, interval = 1000) {
  const el = document.getElementById(elementId);
  
  const username = getCookie('username');
  const wordName = word1.replace('[user]', username || '[user]');
  let toogle = true;
  

  setInterval(() => {
    el.textContent = toogle ? wordName : word2;
    toogle = !toogle; 
  }, interval);
}