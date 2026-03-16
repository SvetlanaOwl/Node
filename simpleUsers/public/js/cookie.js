export function getCookie(name) {
    const value =  `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.lenght === 2) return parts.pop().split(';').shift();
    return null;
}