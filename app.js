import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import path, { dirname } from "path";
import cookieParser from "cookie-parser";

import userRouter from "./routers/userRouter.js";

const app = express();
// Middleware

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin:true,
    credentials: true,
  })
);

// Database connection
mongoose
  .connect(process.env.MONGO_URL, {
    dbName: "database1",
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.error("DB connection failed", err.message);
  });

// Router handling
app.use("/api", userRouter);



app.get("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

console.log("Nodemon is working!");

