const fs = require('fs');

//Blocing code example
console.log('Start of blocking code'); // код выполняется последовательно, блокируя выполнение следующей строки до завершения текущей
const data = fs.readFileSync('myfile.txt', 'utf8'); //Block here
console.log('Blocking operation completed');// запускается только после завершения чтения файла


//Non-blocking code example
console.log('Start of non-blocking code'); // код выполняется ассинхронно, не блокируя выполнения следующей строки
fs.readFile('myfile.txt', 'utf8', (err, data) => { 
    if (err)throw err;
    console.log('Non-blocking operation comlected');
});
console.log('The runs before the file is read');