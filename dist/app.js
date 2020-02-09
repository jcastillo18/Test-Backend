"use strict";

var _express = _interopRequireDefault(require("express"));

var _cancellationKpi = _interopRequireDefault(require("./router/cancellationKpi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)(); // Importando rutas

app.use(_express.default.urlencoded({
  extended: true
}));
app.use(_express.default.json());
app.use('/api', _cancellationKpi.default);
app.use('/', (req, res) => {
  res.status(200).json({
    message: 'Bienvenido Radixhaven'
  });
});
module.exports = app;