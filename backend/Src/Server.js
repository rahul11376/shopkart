// const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import productRoutes from './Routes/ProductRoutes.js';
import connectDB from './Config/db.js';

// server app
const app =express();
app.use(cors());
app.use(express.json());
// connect database
connectDB();



// routes
app.use('/api/products', productRoutes);

app.get('/',(req,res)=>{
    res.send("Server is running");
})

//port 
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`⚙️  Server is running on port   ${PORT}`);
});