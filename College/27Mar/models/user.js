import mongoose, { model, mongo } from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;