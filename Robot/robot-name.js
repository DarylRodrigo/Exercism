/**
 * Created by olivier on 16/02/2017.
 */

let robotManagerInstance = null;

class RobotManager {

    constructor() {

        if (!robotManagerInstance) {

            robotManagerInstance = this;
            robotManagerInstance.alphabet ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
            robotManagerInstance.robotNames = ['']

        }

        return robotManagerInstance;

    }

    allocateSerialNumber(robot) {

        //if robot already has a name, remove that name from robotNames list before allocating a new name
        //This logic breaks the final test
        if (robot.name) {

            let nameIndex = this.robotNames.indexOf(robot.name);

            this.robotNames.splice(nameIndex, 1);

        }

        //generate a random number between 0-9 for each '*'
        let serialNumber = '***'.split('').map(_ => Math.floor(Math.random() * 10)).join('');

        //generate a random letter from alphabet (A-Z) for each '*'
        let serialLetters = '**'.split('').map(_ => this.alphabet[Math.floor(Math.random() * 26)]).join('');

        let serialCode = serialLetters + serialNumber;

        if (!this.robotNames.includes(serialCode)) {

            this.robotNames.push(serialCode);

            robot.name = serialCode;

        } else {

            this.allocateSerialNumber(robot);

        }

    }

}

class Robot {

    constructor() {

        //setup the robot for the first time
        this.reset()

    }

    reset() {

        let robotManager = new RobotManager();

        robotManager.allocateSerialNumber(this);

    }

}

module.exports = Robot;