$(function() {
  var event;
  var stage = 0;
  var delta = 0;
  var i = 0;

  if (stage % 2 === 0) {
    stage += 1;
    start();
  } else if (stage % 2 === 1) {
    clearInterval(event);
  }
  function timerMaker(t) {
    $('#timer').html('Time elapsed: ' + t);
  }
  function start() {
    $('#start').click(function() {
      event = setInterval(function() {
        delta = i + 1;
        i++;
        timerMaker(i);
      }, 1000);
      if (delta > 1) {
        setInterval(function() {
          timerMaker(delta);
        });
      }
    });
  }
  $("#pause").click(function() {
    delta = i;
    clearInterval(event);
  });
  $("#reset").click(function() {
    i = 0;
    delta = 0;
    stage = 0;
    clearInterval(event);
    timerMaker(i);
  });
});
