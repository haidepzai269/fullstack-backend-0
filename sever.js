// Import module http
const http = require('http');

// Cấu hình địa chỉ host và port
const hostname = '127.0.0.1';
const port = 3000;

// Tạo server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n cung Donal ');
});

// Lắng nghe server tại địa chỉ và cổng đã cấu hình
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

