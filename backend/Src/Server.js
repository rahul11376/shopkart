// const express = require('express');
import express from 'express';
const app =express();
import dotenv from 'dotenv';
import cors from 'cors';
import productRoutes from './Routes/ProductRoutes.js';



const PORT = process.env.PORT || 5000;


// routes
app.use('/api/products', productRoutes);

app.get('/',(req,res)=>{
    res.send("Server is running");
})

app.listen(PORT,()=>{
    console.log(`⚙️  Server is running on port   ${PORT}`);
});