var mysql = require('mysql');
const express = require('express');

const app = express();
app.use(express.urlencoded({extended: true}));

var connection = mysql.createConnection(
    {
        host: "127.0.0.1",  
        user: "root",
        password: "Neelam@28",
        database: "test"
    }
);

connection.connect(function(err){
    if(err) throw err;
    else {
        console.log("Connected");
    }
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/login.html')
});

app.get('/register', function(req, res){
    res.sendFile(__dirname + "/register.html");
})

app.post('/auth', function(req, res){
    let username = req.body.username;
    let password = req.body.password;

    console.log(username, password);
    
    connection.query('select * from user where username = ? and password = ?', [username, password], function(err, result){
        
    });
});

app.post('/reg', function(req, res){
    let username = req.body.username;
    let password = req.body.password;
    connection.query('insert into user values(1, "Anushthan", ?, ?)', [username, password], function(err, result){
        if(err) throw err;
        else console.log('User created');
    });
});

app.listen(3000, function(err){
    if(err) throw err;
    console.log("Server listening at port 3000");
})