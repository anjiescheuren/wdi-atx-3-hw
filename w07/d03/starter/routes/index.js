var express = require('express');
var router = express.Router();
var compliments = [
"Your instructors love you",
"High five!",
"Is it Ruby Tuesday yet?",
"It's almost beer o'clock",
"The Force is strong with you",
"You're simply marvelous",
"You're the bees knees",
"You're the coolest"
];

var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];

/* GET home page. */
router.get('/', function(req, res, next) {
  var i = Math.floor(Math.random() * compliments.length);
  var newCompliment = compliments[i];

  var j = Math.floor(Math.random()*colors.length);
  var newColor = colors[j];

  res.render('index', { title: 'Hey there', compliment: newCompliment, backgroundColor: newColor});
});

router.get('/:name', function(req, res, next){
  var name = req.params.name;
  var i = Math.floor(Math.random() * compliments.length);
  var newCompliment = compliments[i];

  var j = Math.floor(Math.random()*colors.length);
  var newColor = colors[j];

  res.render('index', { title: 'Hey there, ' + name, compliment: newCompliment, backgroundColor: newColor});
});

// var compliments = ["Your instructors love you", "High five = ^5", "Is it Ruby Tuesday yet?", "It's almost beer o'clock", "The Force is strong with you"];
// var comp = compliments[Math.floor(Math.random() * compliments.length)];

// var colors = ["#FFBF00 ", "#0080FF ","#01DF3A ","#FF0080 "];
// var color_back = colors[Math.floor(Math.random() * colors.length)];

// /* GET home page. */
// router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Compliment Emergency!', compliment: comp, back: color_back });
// });

// router.post('/', function(req, res, next) {
//   var name = req.body.name;

//   res.send(name);
// });

module.exports = router;
