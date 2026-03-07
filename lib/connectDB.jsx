import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);

    console.log("✅ Database connected successfully");
  } catch (error) {
    console.log("❌ Database connection failed", error);
    console.log(process.env.DATABASE_URL);
  }
};

export default connectDB;