var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function(){
  $('#journal').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newEntry = new Entry(title, body);
    var wordCount = newEntry.getWordCount();
    var vowelCount = newEntry.getVowelCount();
    var consonantCount = newEntry.getConsonantCount();
    var teaser = newEntry.getTeaser();

    $('#entry-list').append("<h3>" + newEntry.jTitle + "</h3>" + "<p>" + newEntry.jBody + "</p>" + "<p>Word count: " + wordCount + "</p>" + "<p>Vowel count: " + vowelCount + "</p>" + "<p>Consonant count: " + consonantCount + "</p><p> Teaser: " + teaser + "</p>");
  });
});


$(document).ready(function(){
  $("#red").click(function(){
    $("body").css({"background-color":"#992020", "color":"black"});
  });
  $("#blue").click(function(){
    $("body").css({"background-color":"#202099", "color":"black"});
  });
  $("#black").click(function(){
    $("body").css({"background-color":"#000000", "color":"white"});
  });
});
