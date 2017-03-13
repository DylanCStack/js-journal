function Entry(title, body) {
  this.jTitle = title,
  this.jBody = body
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
        console.log(letter);
        console.log(count);

        count++;
      }

    });
    return count;
  }//end of prototypes
}
