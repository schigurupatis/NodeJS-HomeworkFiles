// Http module is required
const http = require("http");

// Creating a Server
const server = http.createServer((req, res) => {

    // Condition rendering for perticular path or perticular url
    if(req.url === "/getSecreateData") {
        res.end("There is no secreate data")
    }
    
    // Reply to requests
    res.end("Hello World")

});

// Listening Server Requests
server.listen(7777);
