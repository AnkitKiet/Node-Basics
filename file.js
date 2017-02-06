/**
 * Created by Ankit on 06/02/17.
 */
/*

var  http = require('http');

function onrequest(request,response) {
    var data_value="here is my data";
    response.writeHead(200,{"Context-Type" : "application/json"})
    response.write(JSON.stringify({ data: data_value }));
    response.end();
}

http.createServer(onrequest).listen(8080);
console.log("Server is running");*/

var http = require('http');
var fs = require('fs');

//404
function send404Response(response) {
response.writeHead(404, {"Content-Type" : "text/plain"});
response.write("File Not Found");
response.end();
}

//handle a user request
function onrequest(request,response) {


    if(request.method == 'GET' && request.url == "/") {
        response.writeHead(200, {"Content-Type": "text/plain"});
        fs.createReadStream("./read.txt").pipe(response);
    }
    else {
        send404Response(response);
    }


}
http.createServer(onrequest).listen(8080);
console.log("Server is Running.....");