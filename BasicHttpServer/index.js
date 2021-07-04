const http = require('http');
const port = 8000;

function requestHandler(req, res){
    console.log(req.url);

    res.end('Gotcha');
}

const server = http.createServer(requestHandler);

//port-unique id for service on ur system=i
server.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }

    console.log("Server is up and running on port", port);
}); 

//localhost is same as 127.0.0.1