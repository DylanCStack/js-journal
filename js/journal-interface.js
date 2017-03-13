$(document).ready(function(){
  $('#journal').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();

    $('#entry-list').append("<h3>" + title + "</h3>" + "<p>" + body + "</p>");
  });
});
