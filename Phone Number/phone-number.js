/**
 * Created by olivier on 14/02/2017.
 */

var PhoneNumber = function(input) {

    this.rawNumber = input;

};

PhoneNumber.prototype.number = function () {

    //remove non-number characters
    var number = this.rawNumber.replace(/[^0-9]/g, '');

    if (number.length == 11 && number[0] == 1) {

        //if the number is 11 numbers long and starts with a 1, return the number without the 1
        return number.substring(1);

    } else if (number.length != 10) {

        //invalid number
        return '0000000000';

    }

    return number

};

PhoneNumber.prototype.areaCode = function() {

    var number = this.number();

    //area code is the first three digits of the number
    return number.substring(0,3);

};

PhoneNumber.prototype.toString = function () {

    var number = this.number();
    var areaCode = this.areaCode();

    return '(' + areaCode + ') ' + number.substring(3,6) + '-' + number.substring(6);

};


module.exports = PhoneNumber;