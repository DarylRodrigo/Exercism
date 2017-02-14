/**
 * Created by olivier on 13/02/2017.
 */

/*
Given a DNA strand, its transcribed RNA strand is formed by replacing
each nucleotide with its complement:

* `G` -> `C`
* `C` -> `G`
* `T` -> `A`
* `A` -> `U`

*/

var DnaTranscriber = function() {

    //init the mapping from DNA to RNA
    this.complements = {
        'G':'C',
        'C':'G',
        'T':'A',
        'A':'U'
    };

};

DnaTranscriber.prototype.toRna = function(input) {

    var rna = "";

    for (var i = 0; i < input.length; i++) {

        var complement = this.complements[input[i]];

        //Check letter is included in mapping
        if (complement) {

            rna += complement

        }

    }

    //If no input given or if no mapping found for any of the input letters.
    if (input == "" || rna.length != input.length) {

        throw new Error('Invalid input');

    }

    return rna

};

module.exports = DnaTranscriber;