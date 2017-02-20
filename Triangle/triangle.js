/**
 * Created by olivier on 17/02/2017.
 */

class Triangle {

    constructor(...sides) {

        //sort longest to smallest
        this.sides = sides.sort((side1, side2) => side1 < side2);

        //check triangle satisfies longestSide <= side2 + side3
        this.satisfiesTriangleInequality = this.sides[0] <= this.sides[1] + this.sides[2];

        //check whether any sides are less than or equal to zero
        this.hasZeroValuedSide = (this.sides[0] <= 0 || this.sides[1] <= 0 || this.sides[2] <= 0);

        //check whether the triangle is degenerate
        this.isDegenerate = (this.sides[0] == (this.sides[1] + this.sides[2]));

    }

    kind() {

        //check conditions for a valid triangle are met
        if (!this.satisfiesTriangleInequality || this.hasZeroValuedSide || this.isDegenerate) {

            throw new Error('Illegal triangle');

        }

        if (this.sides[0] == this.sides[1] && this.sides[1] == this.sides[2]) {

            return 'equilateral';

        } else if (this.sides[0] == this.sides[1] || this.sides[1] == this.sides[2]) {

            return 'isosceles';

        } else {

            return 'scalene';

        }

    }

}

module.exports = Triangle;