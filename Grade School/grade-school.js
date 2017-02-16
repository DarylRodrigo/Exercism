/**
 * Created by olivier on 16/02/2017.
 */

class School {

    constructor() {

        this.database = {};

    }


    roster() {

        return this.database;

    }

    grade(number) {

        //if database has never been set for grade, return an empty array
        return (this.database[number] || []);

    }

    add(student, grade) {

        //get students for grade from database or create new empty array
        let students = (this.database[grade] || []);

        //add new student
        students.push(student);

        //sort the array alphabetically
        students.sort();

        //set the new student body to its relevant grade in the database
        this.database[grade] = students;

    }

}

module.exports = School;
