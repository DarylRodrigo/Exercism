/**
 * Created by olivier on 17/02/2017.
 */

class SpaceAge {

    constructor(seconds) {

        //setup constants
        this.seconds = seconds;
        this.yearInSeconds = 31557600;
        this.orbitalPeriods = {
            'Earth': 1.0,
            'Mercury': 0.2408467,
            'Venus': 0.61519726,
            'Mars': 1.8808158,
            'Jupiter': 11.862615,
            'Saturn': 29.447498,
            'Uranus': 84.016846,
            'Neptune': 164.79132
        };

        //this must be called after the constants are setup
        this.setupAccessors()

    }

    setupAccessors() {

        //loop through the planets
        for (let planet of Object.keys(this.orbitalPeriods)) {

            //calculate the number of earth years from the number of seconds
            let earthYears = (this.seconds/this.yearInSeconds);

            //for each planet create a function, eg onEarth(), onVenus() etc
            this['on' + planet] = function() {

                //calculate the number of planet years that have passed from the number of earth years
                let planetYears = earthYears / this.orbitalPeriods[planet];

                //round the value to 2dp and return
                return +planetYears.toFixed(2);

            };

        }

    }

}

module.exports = SpaceAge;