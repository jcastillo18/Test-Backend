"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _db_connection = _interopRequireDefault(require("../db_connection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const cancellationtrackers = new _mongoose.default.Schema({
  _id: {
    type: _mongoose.default.Schema.Types.ObjectId
  },
  owner: {
    type: _mongoose.default.Schema.Types.ObjectId
  },
  departmentDirector: {
    type: String
  },
  accountManager: {
    type: String
  },
  fronter: {
    type: String
  },
  closer: {
    type: String
  },
  orderNumber: {
    type: String
  },
  bussinessName: {
    type: String
  },
  typeOfIndustry: {
    type: String
  },
  bussinessWebsite: {
    type: String
  },
  customerName: {
    type: String
  },
  clientEmail: {
    type: String
  },
  clientPhone: {
    type: String
  },
  typeOfService: {
    type: String
  },
  managementFee: {
    type: Number
  },
  clientBudget: {
    type: String
  },
  country: {
    type: String
  },
  state: {
    type: String
  },
  city: {
    type: String
  },
  daylyBudget: {
    type: Number
  },
  monthlyBudget: {
    type: Number
  },
  cancellationReason: {
    type: String
  },
  cancellationComment: {
    type: String
  }
}, {
  timestamps: true
});
var _default = {
  model: _mongoose.default.model('cancellationtrackers', cancellationtrackers)
};
exports.default = _default;