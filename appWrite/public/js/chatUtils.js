import { account } from "./appwriteClient.js";
//Function to check if the user is logged in and display their username
export async function displayUser() {
    account.get()
    .then(response => {
        document.getElementById('profileUsername').innerText = `${response.name}`;
        })
        .catch(error => {
            console.log('User not logged in:', error);
            document.getElementById('profileUsername').innerHTML =
            'User not logged in.<br><small>Error: ' + error.message + '</small>';
        });
}

// Emoji picker utility
export function setupEmojiPicker() {
    const emojiButton = document.querySelector('#emoji-button');
    const emojiPanel = document.querySelector('#emoji-panel');
    const chatInput = document.querySelector('#chat-input');

    // Переключение панели эмодзи
    emojiButton.addEventListener('click', (e) => {
        e.stopPropagation(); // предотвращаем немедленное закрытие
        emojiPanel.classList.toggle('hidden');
    
    // Позиционирование панели над иконкой
    const rect = emojiButton.getBoundingClientRect();
    emojiPanel.style.top = rect.top - emojiPanel.offsetHeight - 8 + 'px';
    emojiPanel.style.left = rect.left + 'px';
    });

    // Вставка выбранного эмодзи
    emojiPanel.addEventListener('click', (e) => {
        const emoji = e.target.textContent.trim();
        if (emoji) {
            chatInput.value += emoji;
            chatInput.focus();
        }
    });

    // Закрытие панели при клике вне её
    document.addEventListener('click', (e) => {
        if (!emojiPanel.contains(e.target) && !emojiButton.contains(e.target)) {
            emojiPanel.classList.add('hidden');
        }
    });
}