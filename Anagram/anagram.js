/**
 * Created by olivier on 14/02/2017.
 */


class AnagramCandidate {

    constructor(input) {
        this.raw = input;
        this.normalised = Anagram.normalise(input.toLowerCase());
    }

}

class Anagram {

    constructor(input) {
        this.input = input;
    }

    matches(...rawCandidates) {

        //if arguments are not passed in as individual strings, must have been passed as array of strings.
        //eg matches('here', 'bear') vs matches(['here', 'bear'])
        if (typeof rawCandidates[0] !== 'string') {
            rawCandidates = rawCandidates[0];
        }

        //get normalised input for compare
        let normalisedInput = Anagram.normalise(this.input.toLowerCase());

        //create array of Candidates
        let candidates = rawCandidates.map(text => new AnagramCandidate(text));

        //filter candidates that are not equal to normalised input
        var anagrams = candidates.filter(candidate => (candidate.normalised === normalisedInput));

        //filter candidates that are the same as input
        anagrams = anagrams.filter(candidate => (candidate.raw.toLowerCase() !== this.input.toLowerCase()));

        //return the raw anagrams as array of string
        return anagrams.map(candidate => candidate.raw);


    }

    static normalise(input) {

        //string is normalised by rearranging the letters to be in alphabetical order
        let orderLetters = (letter1, letter2) => letter1 > letter2;
        return input.split('').sort(orderLetters).join('');

    }


}



module.exports = Anagram;