document.querySelectorAll('.button-grid').forEach(button => {
    button.addEventListener('click', () => {
        alert('Вы выбрали тест: ' + button.textContent);
    });
});