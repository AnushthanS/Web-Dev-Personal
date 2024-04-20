const fs = require('fs');
let str;
fs.readFile('./test.txt', function(ferr, data_asynch){
    if(ferr) console.error(ferr);
    else {
        console.log(data_asynch.toString());
        str = data_asynch.toString();
    }
});

setTimeout(function(){
    fs.writeFile('test.txt', 'Some text', function(err){
        if(err) console.error(err);
        else console.log('File saved!');
    });
    
    fs.appendFile('test2.txt', str, function(err){
        if(err) console.error(err);
        else console.log('Text appended to test file')
    });
}, 100);