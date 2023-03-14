const http = require('http');
const fs = require('fs');

http.createServer(function(req, res){
    fs.readFile('./logo.html', function(err, data){
        res.setHeader('Content-Type', 'text/html');
        res.write(data);
        return res.end();
    })
}).listen(3000, function(){
    console.log("Server started at 3000");
});