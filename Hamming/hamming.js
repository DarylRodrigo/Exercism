/**
 * Created by olivier on 13/02/2017.
 */

var Hamming = function() {};

Hamming.prototype.compute = function (strand1, strand2) {

    //Strands must be of equal length to compute Hamming distance
    if (strand1.length != strand2.length) {
        throw Error('DNA strands must be of equal length.');
    }

    var differences = 0;

    //Iterate through the strand's bases
    for (var i = 0; i < strand1.length; i++) {

        //if bases at index i are not identical, add 1 to differences, otherwise add 0
        differences += (strand1[i] !== strand2[i]) ? 1 : 0;

    }

    return differences;

};

module.exports = Hamming;