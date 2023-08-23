const http = require('http');
const port = 3000;
const host = "127.0.0.1";

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end('data from home page');    
    } else if (req.url == "/aboutus") {
        res.end('data from about us page.');
    } else {
        // res.statusCode = 404; 
        res.writeHead(404, {"Content-Type": "text/html"});
        res.end('404 page not found.');
    }
    // res.end('data from http request.');
});

server.listen(port, host, () => {
    console.log("server listening..");
});