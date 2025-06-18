// server.js
const http = require('http');

const PORT = 3000;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Halo dari server terenkripsi 💻🔐\n');
}).listen(PORT, () => {
  console.log(`🚀 Server aktif di http://localhost:${PORT}`);
});
