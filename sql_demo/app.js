const mysql = require('mysql');

const con = mysql.createConnection(
    {
        host: '127.0.0.1',
        user: 'root',
        password: 'Neelam@28'
    }
);

con.connect(function(err){
    if(err) throw err;
    else {
        console.log("Connected");
        con.query('create database if not exists test', function(err, result){
            if(err) throw err;
            else console.log('DB created');
        });
    }
});