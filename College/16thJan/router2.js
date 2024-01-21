const express = require('express');
const router = express.Router();


var requestTime = (req, res, next) => {
    console.log(Date.now());
    next();
}

router.get('/path3', (req, res) => {
    res.send("Welcome to path3");
})

router.get('/path4', (req, res) => {
    res.send("Welcome to path4");
})

router.get('/path5', (req, res) => {
    res.send("Welcome to path5");
})


router.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send("Something broke");
})
router.use(requestTime);  
module.exports = router;