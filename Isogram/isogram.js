/**
 * Created by olivier on 14/02/2017.
 */

var Isogram = function(input) {

    this.text = input;

};

Isogram.prototype.isIsogram = function() {

    //regex to find all non letter characters, where 'letters' includes international letters.
    var allNonLetters = /[^\w\u00E0-\u00FC]/g;

    var text = this.text.toLowerCase().replace(allNonLetters, '');

    //iterate through input characters backwards
    for(var i = text.length - 1; i >= 0; i--) {

        //find first index of character
        var firstIndex = text.indexOf(text[i]);

        //if index is less than current index then letter at current index is a repeat, return false
        if (firstIndex < i) {

            return false

        }

    }

    //there must not have been any repeat letters
    return true

};

module.exports = Isogram;