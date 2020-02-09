'use starict'

import mongoose from 'mongoose';
import {config} from 'dotenv';

config()

const {DB_USER, DB_PASSWORD, DB_URI}=process.env;

export default mongoose.createConnection(`mongodb+srv://${DB_USER}:${DB_PASSWORD}${DB_URI}`,{
    reconnectTries: 100,
    reconnectInterval: 500,
    autoReconnect: true,
    useNewUrlParser: true,
    // dbName: 'Casa-pellas-Dev',
    dbName:'test',
    useUnifiedTopology: true,
    useFindAndModify: false
});