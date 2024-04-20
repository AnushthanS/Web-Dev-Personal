const sqlite = require("sqlite3");

exports.connect = function(){
    return new sqlite.Database(__dirname + "/database/dbase.db", err => {
        if(err) console.log(err);
        else console.log("Database Connected");
    });
}

exports.createTable = function(db, err){
    db.run("create table if not exists S20210010027 (S0027EventName varchar(30), S0027EventCode int, S0027Participants int, S0027PNames text, S0027EventType varchar(20))");
    if(err) console.log(err);
    else console.log("Table created");
}