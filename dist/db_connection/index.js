"use strict";
'use starict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = require("dotenv");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _dotenv.config)();
const {
  DB_USER,
  DB_PASSWORD,
  DB_URI
} = process.env;

var _default = _mongoose.default.createConnection("mongodb+srv://".concat(DB_USER, ":").concat(DB_PASSWORD).concat(DB_URI), {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

exports.default = _default;