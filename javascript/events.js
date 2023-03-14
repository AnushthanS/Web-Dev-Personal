const http = require('http');
const events = require('events');
const emitter = new events.EventEmitter();

http.createServer(function(req, res){
    emitter.emit('Sample event');
    res.write('Event emitted');
    res.end();
}).listen(3000, function(){
    console.log("Server started at 3000");
});
emitter.on('Sample event', myEventHandler);

function myEventHandler(){
    console.log("Sample event emitted upon request");
}