var express = require('express');
var router = express.Router();
var accountSid = 'ACdf7d35b9d29aa6c91b56084fafb2e38b';
var authToken = 'c5417a84cf54025a7e54810467e72cfc';
var client = require('twilio')(accountSid, authToken);


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.post('/', function(req, res, next) {
<<<<<<< HEAD
//require the Twilio module and create a REST client

client.messages.create({
  to: "+15127436248",
  from: "+15129826236",
}, function(err, message) {
  console.log(message.sid);
});
})

=======
    
});
>>>>>>> b13dac51b6f14de8025fec5438d25b994767f85d
module.exports = router;
