/**
 * Created by olivier on 17/02/2017.
 */

class Grains {

    constructor() {}

    square(number) {

        let numberOfGrains = new LargePower(2, number - 1);

        return numberOfGrains.toString();

    }

    total() {

        let totalGrains = new Abacus();

        for (let i = 1; i <= 64; i++) {

            let grainsOnSquare = this.square(i);

            totalGrains.add(grainsOnSquare);

        }

        return totalGrains.toString()

    }

}

class Abacus {

    constructor() {

        this.counters = [0];

        /*
        the abacus addition map:-
           - takes each element (an array with two elements) and adds the array elements together
           - if the resulting value is greater than 9, then subtract 10 and carry it over to the next element
           - when carrying over the value of ten becomes one because of the increased value of each counter
        */
        this.abacusAdditionMap = (numbers, i, array) => {

            let number = numbers[0] + numbers[1];

            if (number > 9) {

                number -= 10;
                array[i+1][0] += 1;

            }

            return number

        };

        //similar to above
        this.abacusSubtractionMap = (numbers, i, array) => {

            let number = numbers[0] - numbers[1];

            if (number < 0) {

                array[i+1][0] -= 1;
                number += 10;

            }

            return number

        };

    }

    //ACCESSORS

    toString() {


        let stringCounters = this.counters.map(number => number.toString()).reverse();

        return stringCounters.reduce((accumulator, current) => accumulator += current);

    }

    //OPERATORS

    add(input) {

        //create multidimensional array containing current and input counters for mapping
        let numbers = this.prepareForOperation(input);

        //perform abacus addition (element wise addition and carry over)
        this.counters = numbers.map(this.abacusAdditionMap);

        //trim end elements that are 0.
        while (this.counters[this.counters.length - 1] === 0) this.counters.pop();

    }

    subtract(input) {

        //create multidimensional array containing current and input counters for mapping
        let numbers = this.prepareForOperation(input);

        //perform abacus subtraction (element wise subtraction and carry over)
        this.counters = numbers.map(this.abacusSubtractionMap);

        //trim end elements that are 0.
        while (this.counters[this.counters.length - 1] === 0) this.counters.pop();

    }

    multiply(number) {

        let currentNumber = this.toString();

        //stop when number = 1
        while (number > 1) {

            this.add(currentNumber);
            number--;

        }

    }

    //INTERNAL TOOLS

    prepareForOperation(input) {

        //get counter arrays
        let inputs = this.countersFrom(input);
        let counters = this.counters;

        /*
        create multidimensional array of current counters and input counters
        eg current counter value of 12 and input of 8 => [[2,8], [1,0]] from [2, 1] and [8] respectively
        */

        let numbers = (inputs.length >= counters.length)
            ? inputs.map((number, i) => [(counters[i] || 0), number])
            : counters.map((number, i) => [number, (inputs[i] || 0) ]);

        //add empty element in case of carry over
        numbers.push([0,0]);

        return numbers;

    }

    countersFrom(input) {

        /*
         split input into array of counters, where index indicates placement [ones, tens, hundreds, thousands, etc..]
         eg 12045 => [5, 4, 0, 2, 1]
         */

        switch (typeof input) {
            //if the case is an object, then an abacus or abacus subclass has been passed
            case 'string': return input.split('').map(stringNumber => parseInt(stringNumber)).reverse();
            default: return input.toString().split('').map(stringNumber => parseInt(stringNumber)).reverse();

        }

    }

}

class LargePower extends Abacus {

    constructor(base, exponent) {

        super();
        this.base = base;
        this.exponents = this.granulate(exponent);
        this.calculate();

    }

    calculate() {

        this.counters = [0];

        let base = this.base;

        let values = this.exponents.map(exponent => Math.pow(base, exponent));

        values.forEach(value => (this.counters[0] == 0) ? this.add(value) : this.multiply(value));

    }

    granulate(number) {

        //set lowest possible divisor
        let divisor = 2;

        //if number is less than the divisor then the value doesn't need to be granulated
        if (number < divisor) return [number];

        //find first factor and break
        while (true) {

            if ((number / divisor) % 1 !== 0) {

                divisor++;

            } else {

                break;

            }

        }

        /*
        guard against the number being a prime number (divisor same as number):-
        Prime numbers other than two are always odd, so granulate one less than the number,
        and add the 1 to the granulated values, this brings the sum of values back to the original number
        */

        if (divisor === number) {

            let values = this.granulate(number - 1);
            values.push(1);
            return values;

        }

        /*
        the sum of the returned array's elements should be equal to the input number,
        so push the divisor into the return array number/divisor number of times.
        */

        let values = [];

        for (let i = 0; i < (number / divisor); i++) {

            values.push(divisor);

        }

        return values;

    }

}

module.exports = Grains;
