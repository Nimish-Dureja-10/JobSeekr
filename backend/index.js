import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from "./utils/db.js";

dotenv.config({});
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const corsOptions = {
    origin : "http://localhost:5173",
    credentials: true
};

app.use(cors(corsOptions));

app.get("/",(req,res)=>{
    res.status(200).json({
        message:"Backend Working fine",
        success:true
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});