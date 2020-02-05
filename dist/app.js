"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use(_express.default.urlencoded({
  extended: true
}));
app.use(_express.default.json());
app.use('/', (req, res) => {
  res.status(200).json({
    message: 'Bienvenido Radixhaven'
  });
});
module.exports = app;