(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "44b159a6e09eb0bf85810772f453cc91";

},{}],2:[function(require,module,exports){
function Entry(title, body) {
  this.jTitle = title;
  this.jBody = body;
}

Entry.prototype = {
  getWordCount : function(){
    return this.jBody.split(" ").length;
  },
  getVowelCount : function(){
    var count = 0;
    var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    this.jBody.toLowerCase().split("").forEach(function(letter) {
      if (vowels.indexOf(letter) !== -1) {
        count++;
      }

    });
    return count;
  },
  getConsonantCount : function(){
    var count = 0;
    var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];
    this.jBody.toLowerCase().split("").forEach(function(letter) {
      if (consonants.indexOf(letter) !== -1) {
        count++;
      }

    });
    return count;
  }, getTeaser : function() {
    var teaser = "";
    var punctuation = this.jBody[this.jBody.search(/[^a-zA-Z\d\s:]/)];
    var sentence = this.jBody.split(/[^a-zA-Z\d\s:]/)[0].split(" ");

    if(sentence.length < 8){
      return sentence.join(" ") + punctuation;
    }

    for(var i = 0; i<8; i++){
      var space = " ";
      if(i === 7){
        space = "";
      }
      teaser += sentence[i] + space;
    }
    return teaser + "...";
  }//end of prototypes
};

exports.entryModule = Entry;

},{}],3:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

function Weather() {
}

Weather.prototype.getWeather = function(city, displayFunction) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    displayFunction(city, response.main.humidity);
  }).fail(function(error) {
    $('.showWeather').text(error.responseJSON.message);
  });
}

exports.weatherModule = Weather;

},{"./../.env":1}],4:[function(require,module,exports){
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

$(document).ready(function(){
  $('#time').text(moment());
});

var Weather = require('./../js/weather.js').weatherModule;
var displayHumidity = function(city, humidityData) {
  $('.showWeather').text("The humidity in " + city + " is " + humidityData + "%");
}

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getWeather(city, displayHumidity);
  });
});

},{"./../js/journal.js":2,"./../js/weather.js":3}]},{},[4]);
