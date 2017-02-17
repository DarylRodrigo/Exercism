/**
 * Created by olivier on 16/02/2017.
 */

class ETL {

    constructor() {}

    transform(data) {

        let transformedData = {};

        let keys = Object.keys(data);

        for (let key of keys) {

            for (let letter of data[key]) {

                transformedData[letter.toLowerCase()] = parseInt(key);

            }

        }

        return transformedData;

    }

}

module.exports = ETL;