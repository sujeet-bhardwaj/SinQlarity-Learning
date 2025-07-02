const http = require('http');
const server = http.createServer((req, res) => {
     console.log("Incoming request:", req.url);
  console.log("hello node")
  res.end('Hello from Node.js Server');
});

server.listen(3001, () => {
  console.log('Server is running at http://localhost:3001');
});




