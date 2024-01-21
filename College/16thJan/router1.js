const express = require('express');
const router = express.Router();


var myLogger = (req, res, next) => {
    console.log('LOGGED');
    next();
}

router.get('/path1', (req, res) => {
    res.send("Welcome to path1");
});

router.get('/path2', (req, res) => {
    res.send("Welcome to path2");
});

router.get('/age/:age', (req, res) => {
    if(req.params.age >= 18) {
        res.send("Welcome to page");
    } else res.send("You are not allowed");
});

router.use(myLogger);
module.exports = router;
