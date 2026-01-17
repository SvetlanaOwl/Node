const fs = require('fs'); // Импортируем модуль fs
//Read file asynchronously
fs.readFile('myfile.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('Error reading file: ' + err);
        return;
    }
    console.log('File content: ' + data);
});

console.log('Reading file... (this runs first!)');