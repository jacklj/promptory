'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.get('/', function (req, res) {
  res.send("Hello there");
});

app.get('/hi/:name', function (req, res) {
  var responseMessage = 'Hi ' + req.params.name + '!';
  res.send(responseMessage);
});

var vehicles = {
  car: {
    wheels: 4,
    env: 'land'
  },
  boat: {
    wheels: 0,
    env: 'water'
  },
  bycicle: {
    wheels: 2,
    env: 'land'
  }
};

app.get('/vehicle/:type', function (req, res) {
  var vehicle = req.params.type;
  if (vehicle in vehicles) {
    res.json({
      vehicle: vehicles[vehicle]
    });
  } else {
    res.status(404).send("Sorry can't find that!");
  }
});

app.listen(3000, function () {
  console.log("*** Server listening on port 3000 ***");
});