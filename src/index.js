import database from './db_connection';
import mongoose from 'mongoose';
import {config} from 'dotenv';
import app from './app';


config()

const {PORT, DB_USER, DB_PASSWORD, DB_URI}=process.env;


(async()=>{
    try {
        await database

        // await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}${DB_URI}`,{
        //     reconnectTries: 100,
        //     reconnectInterval: 500,
        //     autoReconnect: true,
        //     useNewUrlParser: true,
        //     // dbName: 'Casa-pellas-Dev',
        //     dbName:'TestCasaPellas',
        //     useUnifiedTopology: true,
        //     useFindAndModify: false
        // })

        console.log('Connect to database');
        app.listen(PORT,()=>{
            console.log(`App listen to port ${PORT}`);
        });


    } catch (error) {
        console.log(error);
    }
})()