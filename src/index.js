// require('dotenv').config({path:'./env'}) // we can also import like this
import dotenv from "dotenv"; // but i import like this but i have to add one more line config
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
  path: "./env",
});

connectDB() //function calling dbconnection which is export from db/connectDB

.then(()=>{                   // asyc jab bhi run hota hai uske bad o ek promise return krta hai
  app.listen(process.env.PORT || 8000, ()=>{
    console.log(` Server is running at port: ${process.env.PORT}`);
  })
})
.catch((err) => {
console.log("MONGO db connection failed !!!", err);
})










/*

import express from "express";

const app = express();


(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERRR: ", error);
      throw error;
    });
    app.listen(process.env.PORT, ()=>{
        console.log(`App is listening on port $ {process.env.PORT}`);
    })
  } catch (error) {
    console.log("ERROR: ", error);
    throw err;
  }
})();
*/
