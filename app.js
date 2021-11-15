const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    console.log('Server created');
    let urlRequest = url.parse(req.url, true);
    console.log('urlRequest.query.id', urlRequest.query.id);
    if (+urlRequest.query.id % 2 == 0) {
        res.end('even');
    } else {
        res.end('odd');
    }
    console.log('urlRequest', urlRequest);
}).listen(8000);