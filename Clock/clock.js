/**
 * Created by olivier on 18/02/2017.
 */

class Clock {

    constructor(hours, minutes) {

        this.hour = 0;
        this.minute = 0;

        this.add(minutes, hours);

    }

    toString() {

        let hour = (this.hour < 10) ? '0' + this.hour.toString() : this.hour.toString();

        let min = (this.minute) ? ((this.minute < 10) ? '0' + this.minute.toString() : this.minute.toString()) : '00';

        return hour + ':' + min;

    }

    add(minutes, hours) {

        let workingHours = (hours != null) ?  this.hour + hours : this.hour;
        let workingMinutes = (minutes != null) ? this.minute + minutes : this.hour;

        while (workingMinutes >= 60 || workingMinutes < 0) {

            if (workingMinutes < 0) {

                workingMinutes += 60;
                workingHours -= 1;

            } else {

                workingMinutes -= 60;
                workingHours += 1;

            }

        }

        while (workingHours >= 24 || workingHours < 0) {

            workingHours += (workingHours < 0) ? 24 : -24;

        }

        this.minute = workingMinutes;
        this.hour = workingHours;

        return this

    }

    plus(minutes) {
        return this.add(minutes);
    }

    minus(minutes) {
        return this.add(-minutes);
    }

    equals(clock) {
        return (clock.hour == this.hour && clock.minute == this.minute);
    }



}

let at = function(hours, minutes){
    return new Clock(hours, minutes);
};

module.exports.at = at;