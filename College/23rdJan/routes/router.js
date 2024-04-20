const express = require('express');
const router = express.Router();

const submittedData=[];

var myLogger = (req, res, next) => {
    console.log('LOGGED');
    next();
};

router.get('/', myLogger, (req, res) => {
    res.render('pages/proj_form');
});
router.get('/display', (req, res) => {
    res.render('pages/display');
});

router.post('/submit', (req, res) => {
    const formData = req.body;
    console.log(formData);
    submittedData.push(formData);
    res.render('pages/display', { data: submittedData });    
});

module.exports = router;