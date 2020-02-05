'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireWildcard(require("mongoose"));

var _joi = _interopRequireDefault(require("@hapi/joi"));

var _db_connection = _interopRequireDefault(require("../db_connection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_db_connection.default;
const User = new _mongoose.default.Schema({
  firstName: {
    required: true,
    type: String
  },
  lastName: {
    required: true,
    type: String
  },
  email: {
    required: true,
    lowercase: true,
    type: String
  },
  password: {
    required: true,
    type: String
  }
}, {
  timestamps: true
});

const UserValidate = _joi.default.object().keys({
  firstName: _joi.default.string().required(),
  lastName: _joi.default.string().required(),
  email: _joi.default.string().email({
    minDomainSegments: 2
  }).required(),
  password: _joi.default.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/).error(new Error('La contraseña debe tener almenos una mayuscula, una minuscula, un numero, un caracter especial y 8 caracteres de longitud'))
});

var _default = {
  model: _db_connection.default.model('User', User),
  validation: UserValidate
};
exports.default = _default;