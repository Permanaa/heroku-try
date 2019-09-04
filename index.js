var http = require('http')

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'}),
    response.write('{"message": "Hello World!"}');
    response.end();
}).listen(8000)

console.log('Server running on port 8000');
