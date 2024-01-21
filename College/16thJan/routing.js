const express = require('express');
const router1 = require('./router1');
const router2 = require('./router2');

const app = express();
app.use(express.json());

app.use('/',router1);
app.use('/',router2);



app.listen(3000, () => {
    console.log("Server at 3000");
});