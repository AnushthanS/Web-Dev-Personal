const mongoose = require('mongoose');
const express = require('express')


const app = express();

const MONGODB_URI = "mongodb://localhost:27017/shopDB";


mongoose.connect(MONGODB_URI).then(
    () => {
        app.listen(3000, () => {console.log("Server listening at 3000");});
    }
).catch( err => {console.log(err);});