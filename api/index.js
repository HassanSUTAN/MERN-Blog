import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./Routes/user.route.js";




dotenv.config();

// Connect to MongoDB
mongoose.connect(

    process.env.MANGO

)
    .then(() => {
        console.log('Database is connected');
    })
    .catch((err) => {
        console.error('Database connection error:', err);
    });

const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000!!!!!!');
});



app.use('/api/user',userRoutes);
