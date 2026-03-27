const http = require('http');
const { URL } = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  // Using the newer URL API (Node.js 10+)
  const baseURL = 'http://' + req.headers.host + '/';
  const parsedUrl = new URL(req.url, baseURL);

  // Get query parameters
  const params = Object.fromEntries(parsedUrl.searchParams);

  // Example of building a query string
  const queryObj = {
    name: 'John Doe',
    age: 30,
    interests: ['programming', 'music']
  };
  const queryStr = querystring.stringify(queryObj);

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    path: parsedUrl.pathname,
    params,
    exampleQueryString: queryStr
  }, null, 2));
});

server.listen(3000);
