const express = require('express');

const app = express();
app.use(express.json());

const reqFilter = (req, res, next) => {
    if(!req.query.age){
        res.send("Please provide your age");
    } else next();
}
app.use(reqFilter);

app.get('/', (req, res) => {
    res.send("Welcome to home page");
});

app.get('/users', (req, res) => {
    res.send("Welcome to users page");
});

app.listen(3001);