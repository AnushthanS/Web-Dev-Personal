const express = require('express');
const app = express();
const port = 3000;

app.listen(port, (error) => {
    if(!error) console.log('Server is listening on port ' + port);
    else console.log("An error occurred, server can\'t start", error);
});
