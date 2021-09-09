//importing the file system module
var fs = require('fs');

//CRUD + rename files

//READ FILES : consists on reading a file on the server side
//Test with a .html file "demofile1.html"
var http = require('http');

http.createServer(function (req,res) {
	fs.readFile('demofile1.html', function(err,data) {
		res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
		res.write(data);
		return res.end();
	});
}).listen(8080);