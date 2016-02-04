function search(name) {
  var api = 'http://www.strudel.org.uk/lookUP/json/?name='+name;
  // requires "jsonp" datatype.
  var searchTerm = $('#lookUP').val();
  console.log(searchTerm);

}
