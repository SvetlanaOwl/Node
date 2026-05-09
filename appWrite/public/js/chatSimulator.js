export function simulateChat() {
    const chatMessages = document.getElementById('chat-messages');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');

    function addMessage(text, username = "You", isMine = true) {
        const div = document.createElement('div');
        div.className = `flex ${isMine ? 'justify-end' : 'justify-start'}`;

        div.innerHTML = `
            <div class="max-w-[85%] md:max-w-[70%]">
                ${isMine ? `<div class="text-blue-400 text-sm mb-1">${username}</div>` : ''}
                <div class="px-4 py-3 rounded-2xl ${isMine ? 'bg-blue-600' : 'bg-gray-700'}">
                    <p class="break-words">${text}</p>
                </div>
                <div class="text-xs text-gray-400 mt-1 text-right">${new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</div>
            </div>
        `;

        chatMessages.appendChild(div);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    //Обработка отправки сообщения
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const msg = chatInput.innerHTML.trim();
        if (!msg) return;

        addMessage(msg);
        chatInput.innerHTML = '';

        // Симуляция ответа от другого пользователя
        setTimeout(() => {
            const replies = ["😂😂", "This is hilarious!", "I'm dead", "Same bro!", "No way!"];
            addMessage(replies[Math.floor(Math.random() * replies.length)], "VortexVIP", false);
        }, 800);
    });

    // Отправка по Enter
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') chatForm.dispatchEvent(new Event('submit'));
    });

    // Демо-сообщения при загрузке
    window.onload = () => {
        setTimeout(() => addMessage("This #oldtag should expire...", "❤️AlexSensei 🔥", false), 400);
        setTimeout(() => addMessage("Hey everyone! Loving the new update!", "Vasyandr 🐌", false), 1200);
        setTimeout(() => addMessage("Welcome to the chat! 🔥", "❤️CoBaMod ❤️", false), 2000);
    };
}