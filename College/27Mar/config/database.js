import mongoose from "mongoose";

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        });
        console.log("Connected to database");
    } catch (error) {
        console.log("Error connecting to database", error);
    }
}

module.exports = connectToDatabase;