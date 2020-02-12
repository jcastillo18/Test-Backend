"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireWildcard(require("mongoose"));

var _cancellationTrackers = _interopRequireDefault(require("../modelsTransfers/cancellationTrackers"));

var _projects = _interopRequireDefault(require("../modelsTransfers/projects"));

var _dotenv = require("dotenv");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MongoClient = require('mongodb').MongoClient;

(0, _dotenv.config)();
const {
  DB_USER,
  DB_PASSWORD,
  DB_URI,
  DB_NAME
} = process.env;

const api = _express.default.Router();

var _default = api.post('/getdata', async (req, res) => {
  try {
    let url = await _mongoose.default.connect(req.body.connectionString, {
      reconnectTries: 100,
      reconnectInterval: 500,
      autoReconnect: true,
      useNewUrlParser: true,
      // dbName: 'Casa-pellas-Dev',
      //dbName:'TestCasaPellas',
      useUnifiedTopology: true,
      useFindAndModify: false
    });
    let data2 = await _projects.default.model.find().exec();
    console.log(data2); // Connection URL

    const url2 = "mongodb+srv://".concat(DB_USER, ":").concat(DB_PASSWORD).concat(DB_URI); // Database Name

    const dbName = DB_NAME; // Use connect method to connect to the server

    MongoClient.connect(url2, function (err, client) {
      //assert.equal(null, err);
      console.log("Connected successfully to server");
      const db = client.db(dbName);
      const collection = db.collection('projects');
      let saveCollection = collection.insertMany(data2);
      saveCollection.then(res => {
        console.log(res);
      }).catch(error => {
        console.log(error);
      }); // db.collection('cancellationtrackers').find({}).toArray((err,data)=>{
      //     if(err) return console.log(err);
      //     res.json(data)
      // })

      client.close();
    });
  } catch (error) {
    console.log(error);
  }
});

exports.default = _default;