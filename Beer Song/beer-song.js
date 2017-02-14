/**
 * Created by olivier on 14/02/2017.
 */

var BeerSong = function() {};

BeerSong.prototype.verse = function (number) {

    var verse = (number + " bottles of beer on the wall, ");
    verse += (number + " bottles of beer.\nTake one down and pass it around, ");
    verse += (number-1 + " bottles of beer on the wall.\n");

    if (number === 0) {

        //Replace the first two numbers with 'no more', then fix the second line and reset -1 to 99
        verse = verse.replace(/[0]/, 'No more');
        verse = verse.replace(/[0]/, 'no more');
        verse = verse.replace(/Take one down and pass it around/, 'Go to the store and buy some more');
        verse = verse.replace(/\-1/, '99');

    } else if (number === 1) {

        //make the first two matches of 'bottles' singular, change 'one' to 'it' and replace 0 with 'no more'.
        verse = verse.replace(/bottles/, 'bottle');
        verse = verse.replace(/bottles/, 'bottle');
        verse = verse.replace(/one/, 'it');
        verse = verse.replace(/0/, 'no more');

    } else if (number === 2) {

        //change every match of bottles with $, the first two $'s should be plural, with the last being singular.
        verse = verse.replace(/bottles/g, '$');
        verse = verse.replace(/\$/, 'bottles');
        verse = verse.replace(/\$/, 'bottles');
        verse = verse.replace(/\$/, 'bottle');
    }

    return verse

};

BeerSong.prototype.sing = function (verseNum, endVerse) {

    //if only one argument given, then set endVerse to 0 (the end of the song)
    if (endVerse === undefined) {
        endVerse = 0;
    }

    var song = '';

    while (verseNum >= endVerse) {

        song += this.verse(verseNum);

        //every verse should have a newline added to it except the last verse to be sung.
        if (verseNum !== endVerse) {
            song += '\n';
        }

        verseNum--;
    }

    return song;

};

module.exports = BeerSong;