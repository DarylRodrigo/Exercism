/**
 * Created by olivier on 14/02/2017.
 */

var Pangram = function(input) {

    this.text = input;

};

Pangram.prototype.isPangram = function() {

    var lowercaseAlphabet = /[a-z]/;

    var text = this.text.toLowerCase();

    var letters = [];

    for (var i = 0; i < text.length; i++) {

        //if character has not been added already and is in the lowercase alphabet, then add it.
        if (letters.indexOf(text[i]) < 0 && lowercaseAlphabet.test(text[i])) {

            letters.push(text[i]);

        }

    }

    return (letters.length === 26)

};

module.exports = Pangram;