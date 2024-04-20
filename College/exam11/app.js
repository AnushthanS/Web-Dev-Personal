const express = require('express');
const app = express();

const relation = require('./sqlite3');
const db = relation.connect();
relation.createTable(db);


app.use(express.urlencoded({extended: false}));
app.set("view engine", "ejs");

app.listen(3000, function() {
    console.log("Server listening at 3000");
});

app.get("/", function(req, res){
    res.render(__dirname+ "/views/index.ejs")
});

app.post("/submit", function(req, res){
    let eventName = req.body.eventName;
    let code = req.body.code;
    let participantsNumber = req.body.participantsNumber;
    let participantsName = req.body.participantsName;
    let eventType = req.body.eventType;

    db.run(`insert into S20210010027 values ('${eventName}', '${code}', '${participantsNumber}', '${participantsName}', '${eventType}')`, (err) => {
        if(err) console.log(err);
        else {
            console.log("Successfully updated database");
            res.redirect("/show");
        }
    });
});

app.get("/show", function(req, res){
    db.all('select * from S20210010027', function(err, row){
        if(err) throw err;
        else {
            console.log("Data fetched");
            res.render('show_data', {row});
        }
    })
});