import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    if (!process.env.MONGODB_URI) {
        throw new Error("MONGODB_URI environment variable not found!");
    }

    if (isConnected) {
        console.log("Already connected to MongoDB");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        if (mongoose.connection.readyState === 1) {
            isConnected = true;
            console.log("Connected to MongoDB");
        } else {
            throw new Error("Failed to establish connection to MongoDB");
        }
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
};
