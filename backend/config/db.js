import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_DB_URI);
    console.log(`Mongo DB connected: ${connection.connection.host}`);
  } catch (err) {
    console.log("Error connecting to DB: ", err);
    process.exit(1);
  }
};
