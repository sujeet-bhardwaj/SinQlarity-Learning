const http = require('http');
const server = http.createServer((req, res) => {
     console.log("Incoming request:", req.url);
     res.setHeader('Content-Type','text/html')


if (req.url === '/') {
res.write(`<form action="/products" method="post">
     <label for="">NAME:</label>
          <input type="text">
          <label for="">Password</label>
          <input type="password">
          <input type="submit">
       </form>
`)
  } else if (req.url === '/products'){
   res.setHeader('Location','/')
    res.write("data is send")  
   res.end()
  } else {
    res.end("Other request");
  }
});

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
