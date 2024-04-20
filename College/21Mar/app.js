const express = require("express");
const router = require("./routes.js");

const PORT = 3000;
const app = express();

app.use(router);
app.listen(PORT, () => {
  console.log("Server listening on port " + PORT);
});
