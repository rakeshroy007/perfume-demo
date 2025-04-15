import mongoose from "mongoose";

const connectToMongo = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to MongoDB Atlas successfully!");
    } catch (error) {
        console.error("Error connecting to MongoDB Atlas:", error);
        process.exit(1); // Exit with failure code
    }
}

export default connectToMongo;