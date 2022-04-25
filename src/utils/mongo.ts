import config  from "config";
import mongoose from 'mongoose';


export async function connectToMongo() {
    try {
        await mongoose.connect(config.get("MONGO_URI"));
        console.log("Connected to Database");
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}