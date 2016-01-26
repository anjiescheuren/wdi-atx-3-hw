//When I click the "Set Color" button,
//it should change the color of the "brush" box
//to the color I specify in the input field.
$(function() {

$('#set-color').click(function(){
  var newColor = $('#color-field').val();
  $('.brush').css('background', newColor);
})

$('#color-field').keypress(function(event){
  if (event.which === 13) {
    $('#set-color').click();
  }
})

var newDiv = '<div class="square"></div>';
for(var i = 1; i <= 8000; i ++) {
  $(newDiv).appendTo('body');
}

$('.square').mouseover(function() {
  $(this).css('background', 'green');
})

$('.square').mouseover(function() {
  var newColor = $('#color-field').val();
  $(this).css('background', newColor);
})

});
