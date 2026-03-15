export function setCookie(cname, cvalue, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${cname}=${cvalue}; expires=${expires.toUTCString()}; path=/`;
}