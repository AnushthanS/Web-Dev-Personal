const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');

const csrfProtection =  csrf({ cookie: true});


const app = express();

const parseForm = express.urlencoded({extended: false});
app.set('view-engine', 'ejs');
app.use(cookieParser());


app.get('/form',csrfProtection, function(req, res) {
    res.render('pages/csrf1.ejs', { csrfToken: req.csrfToken() });
});

app.post('/process',parseForm, csrfProtection, function(req, res){
    res.send('data is being processed');
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});