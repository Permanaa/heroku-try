var http = require('http')

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'}),
    res.write('{"message": "Hello World!"}');
    res.end();
}).listen(process.env.PORT || 8000)

console.log('Server running on port 8000');
