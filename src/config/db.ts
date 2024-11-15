import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const MONGO_URI  = process.env.MONGO_URI || ' ';
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(`Error: ${(error as Error).message}`);
    process.exit(1); // Detener el proceso si la conexión falla
  }
};

export default connectDB;
