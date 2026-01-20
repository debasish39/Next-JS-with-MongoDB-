import mongoose from "mongoose";

const connectDB = async () => {
    try{

        const DB_OPTIONS={
            dbName:process.env.DBNAME,
            user:process.env.DBUSERNAME,
            pass:process.env.DBPASSWORD,
            authSource:process.env.DBAUTHSOURCE,
        }
        await mongoose.connect(process.env.DATABASE_URL,DB_OPTIONS);
        console.log("Database connected successfully");
    }
    catch(error){
        console.log("Database connection failed",error);
    }
}
export default connectDB;
