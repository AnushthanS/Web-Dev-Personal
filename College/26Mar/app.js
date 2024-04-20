const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const fs = require("fs");

app.get("/getUsers", function (req, res) {
  fs.readFile(__dirname + "/" + "users.json", "utf8", function (err, data) {
    if (err) console.error(err);
    console.log(data);
    res.send(data);
  });
});

app.post("/addUser", (req, res) => {
  const { id, firstName, lastName, email } = req.body;
  var user = {
    id,
    firstName,
    lastName,
    email,
  };

  console.log(req.body);
  fs.readFile(__dirname + "/users.json", "utf-8", (err, data) => {
    if (err) {
      return console.error(err);
    }
    data = JSON.parse(data);
    data["user" + user.id] = user;
    console.log(data);
    res.send(data);
    fs.writeFile(__dirname + "/users.json", JSON.stringify(data), (err) => {
      if (err) {
        return console.error(err);
      }
    });
  })
});

const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log("Rest api demo listening at http://%s:%s", host, port);
});
