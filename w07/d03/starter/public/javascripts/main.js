$(function() {

  var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];

  function setRandomBackground() {
    var bgcolor = colors[Math.floor(Math.random()*colors.length)];
    $('body').css('background-color', bgcolor);
  }

  setRandomBackground();

});



