import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

// const baseUrl = process.env.MONGODB || '0.0.0.0:27017';
const baseUrl = "mongodb://localhost:27017/chatUp"


export const connectToDatabase = async () => {
    try {
        await mongoose.connect(baseUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected using mongoose");
    } catch (err) {
        console.log(err);
    }
}
