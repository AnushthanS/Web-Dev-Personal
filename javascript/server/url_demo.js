const http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'html/text'});
    res.write(req.url);
    res.end();
}).listen(8080);

//isn't really writing but rather creating a new file with the request url as content