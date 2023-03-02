const fs = require('fs');
fs.readFile('./test.txt', function(ferr, data_asynch){
    if(ferr) console.error(ferr);
    else console.log(data_asynch.toString());
});