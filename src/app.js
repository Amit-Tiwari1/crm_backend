import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.use(express.json({ limit: "16kb" })); // this is express middleware for json request playload
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public")); // this config for public assests such a favicon and etc
app.use(cookieParser()) // to perform crud methord to user system 


export { app };
