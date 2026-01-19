const fs = require('fs'); // Подключение модуля fs для работы с файловой системой
console.log('Before file read'); // Вывод сообщения перед чтением файла
fs.readFile('myfile.txt', 'utf8', (err, data) => { // Чтение файла 'myfile.txt' в кодировке UTF-8
    if (err)throw err; // Если произошла ошибка, выбрасываем её
    console.log('File contents: ', data); // Выводим содержимое файла в консоль
});
console.log('After file read'); // Вывод сообщения после вызова функции чтения файла