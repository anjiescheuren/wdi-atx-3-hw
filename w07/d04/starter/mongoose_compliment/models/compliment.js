var mongoose = require('mongoose');
<<<<<<< HEAD
// var Schema = mongoose.Schema;
var complimentSchema = new mongoose.Schema({
  compliment: { type: String, required: true }
});
var Compliment = mongoose.model('Compliment', complimentSchema);
=======

var Schema = mongoose.Schema;

var complimentSchema = new Schema({
  compliment: { type: String, required: true }
});

var Compliment = mongoose.model('Compliment', complimentSchema);

>>>>>>> 9ee4a015dfe78357292c9d959fdafa2d223a83bf
// Make this available to our other files
module.exports = Compliment;
