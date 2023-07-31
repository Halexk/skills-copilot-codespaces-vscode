//create a web server
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello World!</h1>');
});
server.listen(8080, () => {
  console.log('Server listening on port 8080');
});
