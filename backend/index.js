// const express = require("express")
// const dotenv = require("dotenv")

import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

import bookRoute from "./route/book.route.js"

const app = express()
// const port = 3000;

dotenv.config()

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDB_URI

// app.get("/", (req, res) => {
//     res.send("Hello Jarvis!");
// });

// connect to mongoDB 
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log("MongoDB connected successfully")
} catch (error) {
    console.log("Error connecting to MongoDB", error);
    
}

//defining routes
app.use("/book", bookRoute)


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})