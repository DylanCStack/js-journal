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
