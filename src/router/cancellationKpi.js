import express from 'express';
import mongoose, { mongo } from 'mongoose';
import cancellationTrackers from '../modelsTransfers/cancellationTrackers';
import projects from '../modelsTransfers/projects';
const MongoClient = require('mongodb').MongoClient;
import {config} from 'dotenv';
config();

const {DB_USER, DB_PASSWORD,DB_URI, DB_NAME} = process.env;

const api = express.Router();

export default api.post('/getdata', async(req, res)=>{
    try {
        let url = await mongoose.connect(req.body.connectionString,{
        
        reconnectTries: 100,
        reconnectInterval: 500,
        autoReconnect: true,
        useNewUrlParser: true,
        // dbName: 'Casa-pellas-Dev',
        //dbName:'TestCasaPellas',
        useUnifiedTopology: true,
        useFindAndModify: false
       });
       let data2 = await projects.model.find().exec();
       console.log(data2);

       // Connection URL
        const url2 = `mongodb+srv://${DB_USER}:${DB_PASSWORD}${DB_URI}`;
 
        // Database Name
        const dbName = DB_NAME;

        // Use connect method to connect to the server
        MongoClient.connect(url2, function(err, client) {
        //assert.equal(null, err);
        console.log("Connected successfully to server");
        
        const db = client.db(dbName);

        const collection = db.collection('projects');
        let saveCollection=collection.insertMany(data2)
            saveCollection.then((res)=>{
                    console.log(res);
            }).catch((error)=>{
                console.log(error);
            });
        
        // db.collection('cancellationtrackers').find({}).toArray((err,data)=>{
        //     if(err) return console.log(err);
        //     res.json(data)
        // })
        
        client.close();
        });

   
      
    } catch (error) {
        console.log(error);
    }
})
