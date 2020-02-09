"use strict";

var _db_connection = _interopRequireDefault(require("./db_connection"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = require("dotenv");

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _dotenv.config)();
const {
  PORT,
  DB_USER,
  DB_PASSWORD,
  DB_URI
} = process.env;

(async () => {
  try {
    await _db_connection.default; // await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}${DB_URI}`,{
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

    _app.default.listen(PORT, () => {
      console.log("App listen to port ".concat(PORT));
    });
  } catch (error) {
    console.log(error);
  }
})();