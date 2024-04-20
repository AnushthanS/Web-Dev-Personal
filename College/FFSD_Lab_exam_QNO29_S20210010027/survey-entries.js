const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const surveySchema = new Schema(
    {
        S20027timestamp : { type : Date, default: Date.now },
        S20027Name : { type: String, required: true},
        S20027Email : { type: String, required: true},
        S20027State : { type: String, required: true},
        S20027Gender : { type: String, required: true}, 
        S20027Cases : { type: String, required: true}, 
    }
);

module.exports =  mongoose.model('S20027Survey', surveySchema);