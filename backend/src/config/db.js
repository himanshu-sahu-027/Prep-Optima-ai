import mongoose from "mongoose";
import { envConfig } from "./env.js";

const connectToDB = async () => {
    try {
        await mongoose.connect(envConfig.MONGO_URI);
        console.log("MongoDB Connected");
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectToDB;