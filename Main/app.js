/**
 * Created by olivier on 13/02/2017.
 */

var http = require("http");

//Listener function to be passed to createServer call.

var listener = function (request, response) {

    var header = {'Content-Type': 'text/plain'};
    var body = 'Exercism\n';

    response.writeHead(200, header);
    response.end(body);

};

http.createServer(listener).listen(1337);


