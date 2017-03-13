$(document).ready(function(){
  $('#journal').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newEntry = new Entry(title, body);
    var wordCount = newEntry.getWordCount();
    var vowelCount = newEntry.getVowelCount();
    var consonantCount = newEntry.getConsonantCount();

    $('#entry-list').append("<h3>" + newEntry.jTitle + "</h3>" + "<p>" + newEntry.jBody + "</p>" + "<p>Word count: " + wordCount + "</p>" + "<p>Vowel count: " + vowelCount + "</p>" + "<p>Consonant count: " + consonantCount + "</p>");
  });
});
