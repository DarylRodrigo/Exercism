/**
 * Created by olivier on 14/02/2017.
 */

class FoodChain {

    constructor() {

        this.animals = ['fly', 'spider', 'bird', 'cat', 'dog', 'goat', 'cow', 'horse'];
        this.animalSpecificLines = {
            'fly': '',
            'spider': '\nIt wriggled and jiggled and tickled inside her.',
            'bird': '\nHow absurd to swallow a bird!',
            'cat': '\nImagine that, to swallow a cat!',
            'dog': '\nWhat a hog, to swallow a dog!',
            'goat': '\nJust opened her throat and swallowed a goat!',
            'cow': '\nI don\'t know how she swallowed a cow!',
            'horse': '\nShe\'s dead, of course!'
        }

    }

    verse(verseNumber) {

        let verse = '';

        let animal = this.animals[verseNumber-1];

        let numberOfLines = verseNumber + 1;

        if (animal === 'horse') {

            numberOfLines = 1

        }

        for (let i = 0; i < numberOfLines; i++) {

            verse += this.line(i, animal);

        }

        return verse;

    }

    verses(start, end) {

        let song = '';

        for (let i = start; i <= end; i++) {

            song += this.verse(i);
            song += '\n';

        }

        return song;

    }

    line(number, animal) {

        let finalLineNumber = this.animals.indexOf(animal) + 1;
        let startLineNumber = 0;

        let line = '';

        if (number === startLineNumber) {

            //add first line and the animal specific line.
            line += 'I know an old lady who swallowed a ' + animal + '.';
            line += this.animalSpecificLines[animal];

        } else if (number === finalLineNumber) {

            //add last line
            line += 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.';

        } else {

            let firstAnimalIndex = this.animals.indexOf(animal) - (number - 1);
            let secondAnimalIndex = firstAnimalIndex - 1;
            let firstAnimal = this.animals[firstAnimalIndex];
            let secondAnimal = this.animals[secondAnimalIndex];

            line += 'She swallowed the ' + firstAnimal;
            line += ' to catch the ' + secondAnimal;

            if (secondAnimal === 'spider') {

                line += ' that wriggled and jiggled and tickled inside her.';

            } else {

                line += '.';

            }

        }

        line += '\n';

        return line

    }

}

module.exports = FoodChain;
