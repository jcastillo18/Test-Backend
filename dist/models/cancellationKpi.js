"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _db_connection = _interopRequireDefault(require("../db_connection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_db_connection.default;
const cancellationKpi = new _mongoose.default.Schema({
  departament_director: {
    type: String
  },
  account_manager: {
    type: String
  },
  fronter: {
    type: String
  },
  closer: {
    type: String
  },
  order_number: {
    type: String
  },
  bussiness_name: {
    type: String
  },
  client_name: {
    type: String
  },
  bussiness_website: {
    type: String
  },
  client_phone: {
    type: String
  },
  client_email: {
    type: String
  },
  type_of_service: {
    type: String
  },
  management_fee: {
    type: Number
  },
  sales_date: {
    type: Date
  },
  collection_date: {
    type: Date
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
  client_budget: {
    type: String
  },
  dayly_budget: {
    type: Number
  },
  monthly_budget: {
    type: number
  },
  cancellation_reason: {
    type: String
  },
  industry_type: {
    type: String
  },
  cancellation_comment: {
    type: String
  }
}, {
  timestamps: true
});
var _default = {
  model: _db_connection.default.model('cancellationKpi', cancellationKpi)
};
exports.default = _default;