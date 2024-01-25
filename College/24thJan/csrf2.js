const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('view-engine', 'ejs');


app.get('/form', function(req, res) {
    res.render('pages/csrf2.ejs');
});

app.post('/process', function(req, res){
    res.send('data is being processed');
});

app.listen(3002, () => {
    console.log('Server is running on port 3002');
});