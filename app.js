const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    let urlParts = url.parse(req.url);
    console.log('urlParts', urlParts);
    if (req.method == 'GET') {
        switch (urlParts.pathname) {
            case '/':
                homaPage(req, res);
                break;

            case '/about': {
                aboutPage(req, res);
                break;
            }
        }
    }
}).listen(5000);
console.log('Server is running');


const homaPage = (req, res) => {
    res.end('homaPage');
}

const aboutPage = (req, res) => {
    res.end('aboutPage');
}

