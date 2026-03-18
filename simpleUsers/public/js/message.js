export function greeting() {
  const messages = ['Hello, username!', 'Please log in'];
  let index = 0;

  setInterval(() => {
    document.getElementById('message').textContent = messages[index];
    index = (index + 1) % messages.length; // Безопасное переключение по кругу
  }, 2000);
}