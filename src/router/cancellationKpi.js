import models from '../models';
import express from 'express';
import mongoose from 'mongoose';

const {cancellationKpi:{model}}=models;
const cancellationKpi=model;
const api = express.Router();

export default api.get('/getdata', async(req, res)=>{
    try {
       let conexion=await mongoose.createConnection(req.body.connectionString,{useUnifiedTopology:true, useNewUrlParser:true});


    } catch (error) {
        console.log(error);
    }
})
