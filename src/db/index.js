// in this file create a connection function and export in index js file

import mongoose from "mongoose"; //for connect to database
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGO connection error", error);
    process.exit(1);
  }
};

export default connectDB;

// database connection section end
