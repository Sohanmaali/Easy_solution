import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // await mongoose.connect("mongodb://localhost:27017/Easy_Solution");
        await mongoose.connect('mongodb+srv://sohaninfobeans4:SOHAN1234@aok-cluster.k6fsd.mongodb.net/Easy_solution?retryWrites=true&w=majority');
        console.log("Database connected....");
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1);
    }

};

export default connectDB;
