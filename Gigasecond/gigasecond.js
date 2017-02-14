/**
 * Created by olivier on 13/02/2017.
 */

var Gigasecond = function(date) {

    this.oldDate = date;

};

Gigasecond.prototype.date = function() {

    /*
    A gigasecond is 10^9 seconds, so a gigasecond in milliseconds is 10^9 * 10^3 = 10^12 ms
    get the old time in milliseconds since 1970, and add a gigasecond in ms
    and create a new date with the result, and return
    */

    var newDate = new Date();

    newDate.setTime(this.oldDate.getTime() + Math.pow(10, 12));

    return newDate;

};

module.exports = Gigasecond;