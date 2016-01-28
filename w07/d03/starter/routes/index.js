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

/* GET home page. */
router.get('/', function(req, res, next) {
  var i = Math.floor(Math.random() * compliments.length);
  var newCompliment = compliments[i];

  res.render('index', { title: 'Hey there', compliment: newCompliment});

});

router.get('/:name', function(req, res, next){
  var name = req.params.name;
  var i = Math.floor(Math.random() * compliments.length);
  var newCompliment = compliments[i];

  res.render('index', { title: 'Hey there, ' + name, compliment: newCompliment});
});

router.post('/', function(req, res, next) {
  var name = req.body.name;

  res.send(name);
})

module.exports = router;
