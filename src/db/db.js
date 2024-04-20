import mongoose from 'mongoose'; // corrected import statement


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect('mongodb+srv://ishant0650be21:1234@cluster0.y0exxib.mongodb.net');
        console.log(`MongoDB connected: ${connectionInstance.connection.host}`); // corrected template string
    } catch (error) {
        console.error("MongoDB connection error:", error); // corrected console.log to console.error
        process.exit(1);
    }
}

export default connectDB;
