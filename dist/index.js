"use strict";

var _db_connection = _interopRequireDefault(require("./db_connection"));

var _dotenv = require("dotenv");

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _dotenv.config)();
const {
  PORT
} = process.env;

(async () => {
  try {
    await _db_connection.default;
    console.log('Connect to database');

    _app.default.listen(PORT, () => {
      console.log("App listen to port ".concat(PORT));
    });
  } catch (error) {
    console.log(error);
  }
})();