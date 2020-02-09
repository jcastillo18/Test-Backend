"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _cancellationKpi = _interopRequireDefault(require("../models/cancellationKpi"));

var _users = _interopRequireDefault(require("../modelsTransfers/users"));

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _projects = _interopRequireDefault(require("../modelsTransfers/projects"));

var _cancellationTrackers = _interopRequireDefault(require("../modelsTransfers/cancellationTrackers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const api = _express.default.Router();

var _default = api.post('/getdata', async (req, res) => {
  try {
    await _mongoose.default.connect(req.body.connectionString, {
      reconnectTries: 100,
      reconnectInterval: 500,
      autoReconnect: true,
      useNewUrlParser: true,
      // dbName: 'Casa-pellas-Dev',
      dbName: 'TestCasaPellas',
      useUnifiedTopology: true,
      useFindAndModify: false
    });
    let data2 = await _cancellationTrackers.default.model.find().exec();
    data2.forEach(element => {
      let ct = new _cancellationKpi.default.model();
      ct._id = element._id;
      ct.owner = element.owner;
      ct.departmentDirector = element.departmentDirector;
      ct.accountManager = element.accountManager;
      ct.fronter = element.fronter;
      ct.closer = element.closer;
      ct.orderNumber = element.orderNumber;
      ct.businessName = element.businessName;
      ct.typeOfIndustry = element.typeOfIndustry;
      ct.businessWebsite = element.businessWebsite;
      ct.customerName = element.customerName;
      ct.clientEmail = element.clientEmail;
      ct.clientPhone = element.clientPhone;
      ct.typeOfService = element.typeOfService;
      ct.managementFee = element.managementFee;
      ct.clientBudget = element.clientBudget;
      ct.country = element.country;
      ct.state = element.state;
      ct.city = element.city;
      ct.dailyBudget = element.dailyBudget;
      ct.monthlyBudget = element.monthlyBudget;
      ct.cancellationReason = element.cancellationReason;
      ct.cancelationComment = element.cancelationComment;

      const saveData = _cancellationKpi.default.model.create(ct);

      console.log('Insertando Datos');
    });
  } catch (error) {
    console.log(error);
  }
});

exports.default = _default;