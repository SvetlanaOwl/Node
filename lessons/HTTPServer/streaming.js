const http = require('http');
const fs = require('fs');
const path = require('path');

// Simple MIME type mapping
/*const mimeTypes = {
    '.html': 'text/html; charset=utf-8',
    '.htm': 'text/html; charset=utf-8',
    '.txt': 'text/plain; charset=utf-8',
    '.json': 'application/json',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};*/

const server = http.createServer((req, res) => {
    // Get the file path from the URL
    const filePath = path.join(__dirname, req.url);

    // Check if file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
        res.statusCode = 404;
        res.end('File not found');
        return;
        }

        // Get file stats
        fs.stat(filePath, (err, stats) => {
        if (err) {
            res.statusCode = 500;
            res.end('Server error');
            return;
        }

        // Set appropriate headers
        res.setHeader('Content-Length', stats.size);
        //res.setHeader('Content-Type', 'application/octet-stream');
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        //const ext = path.extname(filePath).toLowerCase();
        // contentType = mimeTypes[ext] || 'application/octet-stream';
        //res.setHeader('Content-Type', contentType);


        // Create read stream and pipe to response
        const stream = fs.createReadStream(filePath);

        // Handle errors
        stream.on('error', (err) => {
            console.error('Error reading file:', err);
            if (!res.headersSent) {
            res.statusCode = 500;
            res.end('Error reading file');
            }
        });

        // Pipe the file to the response
        stream.pipe(res);
        });
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`File server running at http://localhost:${PORT}/`);
});
