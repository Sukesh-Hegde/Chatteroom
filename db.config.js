import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

// const baseUrl = process.env.MONGODB || '0.0.0.0:27017';
const baseUrl = "mongodb+srv://sukeshhegde994591:1234@cluster0.a5bcuvt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


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
