const http = require('http');
const port = 8000;
//for reading writing files(module- fs)
const fs = require('fs');

function requestHandler(req, res){
    console.log(req.url);
    res.writeHead(200, {'Content-Type': 'text/html'}); //For writing in Response headers

    let filePath;

    switch(req.url){        
        case '/':
            filePath = './index.html'
            break;
        case '/profile':
            filePath = './profile.html'
            break;

        default:
            filePath = './404.html'
    }

    fs.readFile(filePath, function(err, data){
        if(err){
            console.log('error', err);
            return res.end('<h1 style="color: orange;">Error!! Do Not Panic </h1>')
        }

        return res.end(data);
    });
}


//for index.js
/*
function requestHandler(req, res){
    console.log(req.url);
    res.writeHead(200, {'Content-Type': 'text/html'}); //For writing in Response headers

    fs.readFile('./index.html', function(err, data){
        if(err){
            console.log('error', err);
            return res.end('<h1 style="color: orange;">Error!! Do Not Panic </h1>')
        }
        
        return res.end(data); 
    });

    //res.end('<h1 style="color: red; border: 1px solid black;">Gotcha!</h1>');
}
*/
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