const { write } = require('fs');
const http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello from my web server!');
}).listen(8080);