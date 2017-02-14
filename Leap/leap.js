//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function(year) {

    //Make Year into an object containing the init argument as it's 'number' key value
    this.number = year;

};

Year.prototype.isLeap = function() {

     var year = this.number;

     /*
     The Gregorian calendar has a leap year on every year that is evenly divisible by 4
     except the years that are evenly divisible by 100,
     unless the year is also evenly divisible by 400
     */

     return (year%4 == 0 && year%100 != 0) || year%400 == 0;

};

module.exports = Year;
