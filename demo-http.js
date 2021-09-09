//importing built-in js module "http" for hosting
var http = require ('http');

//importing the "url" module to manage the request part 
var url = require ('url');

//importing custom module "myfirstmodule" for testing
var dt = require ('./myfirstmodule');

http.createServer(function (req,res) {
	//header
	res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
	//managing the request url
	var q = url.parse(req.url, true).query;
	var txt;
	(q.year == null && q.month == null)? txt = "Empty request":
	(q.year == null || q.month == null)? txt = "Your request is incomplete":
									     txt = q.year + " " + q.month;
	
	//response content
	res.end(req.url+"<br>"+txt);
	
	//footer
	res.end();
}).listen(8080);