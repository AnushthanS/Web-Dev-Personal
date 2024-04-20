const express = require('express');
const mongoose = require('mongoose');
const S20027Survey = require('./survey-entries');

const app = express();

app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

const MONGOURI = "mongodb://localhost:27017/S20210010027";

mongoose.connect(MONGOURI).then(
    () => {
        app.listen(3000, () => {
            console.log("Server listening at 3000");
        })
    }
);

app.get('/', (req, res) => {
    res.render('survey');
})

app.post('/collect-data', (req, res) => {
    const nameIn = req.body.nameInput;
    const emailIn = req.body.emailInput;
    const stateIn = req.body.stateInput;
    const genderIn = req.body.genderInput;
    const casesIn = req.body.casesInput;

    const newEntry = new S20027Survey({
        S20027Name: nameIn,
        S20027Email: emailIn,
        S20027State: stateIn,
        S20027Gender: genderIn,
        S20027Cases: casesIn,
    });

    newEntry.save();
    res.redirect('/');
});

app.get('/data-display', (req, res) => {
    S20027Survey.find({}).then(
        (entries) => {
            console.log(entries);
            return res.render('data-display', {entries})
        }
    );
})