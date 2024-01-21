const express = require('express');

const app = express();
app.use(express.json());

var myLogger = (req, res, next) => {
    console.log('LOGGED');
    next();
}

var requestTime = (req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.requestTime);
    next();
}

// app.use(myLogger);
app.use(requestTime);
app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/route1', (req, res, myLogger) => {
    res.send('Hello World!');
    myLogger();
})

app.get('/route2', (req, res, myLogger) => {
    res.send('Hello World!');
    myLogger();
})


app.listen(3000, () => {
    console.log("Server at 3000")
});