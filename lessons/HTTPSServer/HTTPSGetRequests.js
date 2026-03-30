const https = require('https');
const { URL } = require('url');

//Parse the target URL
const apiUrl = new URL('https://jsonplaceholder.typicode.com/posts/1');

//Request options 
const options = {
    hostname: apiUrl.hostname,
    port: 443,
    path: apiUrl.pathname + apiUrl.search,
    method: 'GET',
    headers: {
        'User-Agent': 'MySecureApp/1.0',
        'Accept': 'application/json',
        'Cache-Control': 'no-cache'    
    },
    //Secure settings
    rejectUnauthorized: true, //Verify the server certificate (default: true)
    //Timeout in milliseconds
    timeout: 10000, //10 seconds
};
console.log(`Making request to: https://${options.hostname}${options.path}`);

//Make the HTTPS request
const req = https.request(options, (res) => {
    const { statusCode, statusMessage, headers } = res;
    const contentType = headers['content-type'] || '';

    console.log(`Status: ${statusCode} ${statusMessage}`);
    console.log('Headers:', headers);

    //Handle redirects
    if (statusCode >= 300 && headers.location) {
        console.log(`Redirecting to: ${headers.location}`);
        //in a real app, you'd handle the redirect
        res.resume(); //Discard the reponse body
        return;
    }

    //Check for successful response
    let error;
    if (statusCode !== 200) {
        error = new Error(`Request Failed.\nStatus Code: ${statusCode}`);
    } else if (!/^application\/json/.test(contentType)){
        error = new Error(`Invalid content-type.\nExpected application/json but received ${contentType}`);
    }
    if (error) {
        console.error(error.message);
        res.resume(); //Consume response data to free up memory
        return;
    }
    //process the response
    let rawData = '';
    res.setEncoding('utf8');

    //Collect chunks of data
    res.on('data', (chunk) => {
        rawData += chunk;
    });

    //Process the complete response
    res.on('end', () => {
        try {
            const parseData = JSON.parse(rawData);
            console.log('Response data:', parseData);
        } catch (e) {
            console.log('Error parsing JSON:', e.message);
        }
    });
});

//Handle request errors
req.on('error', (e) => {
    console.error(`Request error: ${e.message}`);
    if (e.code === 'ECONNRESET') {
        console.error('Connection was reset by the server');
    } else if (e.code === 'ETIMEDOUT') {
    console.error('Request timed out');
    }
});

//Set a timeout for the entire request (including DNS lookup, TCP connect, etc.)
req.setTimeout(15000, () => {
    req.destroy(new Error('Request timeout after 15 seconds'));
});

//Handle socket errors ( network-lewel errors)
req.on('socket', (socket) => {
    socket.on('error', (error) => {
        console.error('Socket error:', error.message);
        req.destroy(error);
    });
    //Set a timeout for the socket coonection
    socket.setTimeout(5000, () => {
        req.destroy(new Error('Socket timeout after 5 seconds'));
    });
});

//End the request (required to send it)
req.end();