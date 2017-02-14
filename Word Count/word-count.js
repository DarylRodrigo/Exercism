/**
 * Created by olivier on 13/02/2017.
 */

var Words = function() {

    this.anyWordRegex = /\w+/;

};

Words.prototype.count = function(input, results) {

    //if first run, without any results, begin recursion
    if (results === undefined) {

        return this.count(input, Object());

    }

    //find first word
    var result = this.anyWordRegex.exec(input);

    //check if match found
    if (result != null) {

        //get match
        var match = result[0];

        //add 1 to it's respective tally
        results[match] += 1;

        //remove match from input
        var newInput = input.replace(this.anyWordRegex, '');

        //continue recursion
        return this.count(newInput, results);

    }

    //if result is null then all words have been found, should return
    return results;

};

module.exports = Words;