const { log } = require("console");
const http = require("http");

const port = 3000;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
   

    if(req.url === '/contact'){
        res.end("Contact page");
    }
    else if(req.url === '/about') {
        res.end("About page");
    }else {
        res.end("Home page")
    }

})

server.listen(port, hostname, () => {
    console.log(`Server is running at ${port}`);
    
})