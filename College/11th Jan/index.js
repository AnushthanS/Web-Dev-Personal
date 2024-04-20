const express = require('express');

const PORT = 3001;
const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('page1')
})

app.get('/page2', (req, res) => {
    res.render('page2')
} )

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})