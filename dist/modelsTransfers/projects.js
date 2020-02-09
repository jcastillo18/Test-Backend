"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _db_connection = _interopRequireDefault(require("../db_connection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const projects = new _mongoose.default.Schema({}, {
  timestamps: true
});
var _default = {
  model: _mongoose.default.model('projects', projects)
};
exports.default = _default;