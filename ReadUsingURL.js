var http = require("http");
var url = require("url");
//import fs core module for handling FS functionality
var fs = require('fs');

//create your own server
http.createServer(function(request, response)
{
	//parse the url
    var url_parameters = url.parse(request.url,true);
	//get the file name with the help of url module
    var path =   url_parameters.pathname;
	//read the file content
    var file = path.substring(1);
	//read file content
    fs.readFile(file, function(error, data){
        if(!error){
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(data.toString());
            response.end();           
        }
        else {
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write("<h1> Resource Not Found..Please try again!! </h1>");
            response.end();
        }
    });
}).listen(3000);
console.log("Sever started on port:3000");