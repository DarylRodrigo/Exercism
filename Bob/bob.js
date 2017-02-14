/**
 * Created by olivier on 13/02/2017.
 */

/*

Bob answers 'Sure.' if you ask him a question.

He answers 'Whoa, chill out!' if you yell at him.

He says 'Fine. Be that way!' if you address him without actually saying anything.

He answers 'Whatever.' to anything else.

*/

var Bob = function() {};

Bob.prototype.hey = function(input) {

    //test whether input contains any numbers
    var anyNumberRegex = /[0-9]/;
    var inputContainsNumbers = anyNumberRegex.test(input);

    //test whether input contains any letters
    var anyLetterRegex = /[A-z]/;
    var inputContainsLetters = anyLetterRegex.test(input);

    if (!inputContainsLetters && !inputContainsNumbers) {

        //silence is defined as a string with no letters or numbers
        return 'Fine. Be that way!';

    } else if (input.toUpperCase() == input && inputContainsLetters) {

        //Shouting requires ALL CAPS and letters
        return 'Whoa, chill out!';

    } else if (input[input.length-1] === '?') {

        //Questions always end with a question mark
        return 'Sure.';

    }  else {

        return 'Whatever.';

    }

};

module.exports = Bob;