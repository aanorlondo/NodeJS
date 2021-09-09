//importing built-in js module "http" for hosting
var http = require ('http');

//importing custom module "myfirstmodule" for testing
var dt = require ('./myfirstmodule');

http.createServer(function (req,res) {
	//header
	res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
	//content
	res.write("Hello World <br> The date and time are currently: "+dt.myDateTime());
	//footer
	res.end();
}).listen(8080);