const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

const router = require('./routes/router');
app.use('/', router);

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});