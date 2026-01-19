const fs = require('fs');

fs.readFile('text1.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('1.', data);
});

process.nextTick(() => {
    fs.readFile('text2.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('2.', data);
    });
});

Promise.resolve().then(() => {
    fs.readFile('text3.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('3.', data);
    });
});

