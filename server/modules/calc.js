var express = require('express');
// Use our local router to respond to requests
var router = express.Router();

var add = require('./add.js');
router.use('/add', add);

router.post('/subtract', function(req, res){
  var data = req.body;
  console.log(data);
  var response = {};
  // Use our local function to subtract
  var result = subtract(parseInt(data.x), parseInt(data.y));
  response.result = result;
  res.send(response);
});

router.post('/multiply', function(req, res){
  var data = req.body;
  console.log(data);
  var response = {};
  var result = parseInt(data.x) * parseInt(data.y);
  response.result = result;
  res.send(response);
});

router.post('/divide', function(req, res){
  var data = req.body;
  console.log(data);
  var response = {};
  var result = parseInt(data.x) / parseInt(data.y);
  response.result = result;
  res.send(response);
});

// Used to test our routes. (http://localhost:5000/calculator/)
router.get('/', function(req, res) {
  res.send('Hello');
});

/**
 * Subtract function. Returns x - y.
 * @param {int} x First number
 * @param {int} y Second number
 */
function subtract(x, y) {
  return x - y;
}

// TODO: Local functions for multiply & divide.

// Return our router so that it can be added to our app
module.exports = router;
