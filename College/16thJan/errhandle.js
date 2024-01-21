const express = require('express');
const fsPromises = require('fs').promises;

const app = express();
app.use(express.json());


app.get('/fsd1', (req, res, next) => {
    fsPromises.readFile('./index.html')
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            next(err);
        })
});

app.get('/fsd2', (req, res, next) => {
    fsPromises.readFile('./index.html')
    .then(data => {
        res.send(data);
    }).catch(
        err => {
            err.type = 'redirect';
            next(err)
        }
    );
});

app.get('/error', (req, res) => {
    res.send('custom');
});

app.use((err, req, res, next) => {
    console.log('Error handling middleware called');
    console.log('Path: ', req.path);
    console.error('Error: ', err);

    if(err.type == 'redirect'){
        res.redirect('/error');
    } else if(err.type == 'time-out'){
        res.status(408).send(err.message);
    } else {
        res.status(500).send(err.message);
    }
    next();
});

app.listen(3000, () => {
    console.log("Server listening at port 3000");
});