var http = require ('http');
var fs = require ('fs');
var url = require ('url');

http.createServer(function (req,res) {
	//parsing the URL
	var q = url.parse(req.url, true);
	//generating the file name ./ meaning it's in the same folder as the target
	var filename = "."+ q.pathname; //that should be "./path"
	//reading the file to fetch data but throws error
	fs.readFile(filename,function(err,data) {
		if (err) { //if error throw http code 404
			res.writeHead(404, {'Content-Type': 'text/html'});
			console.log('404 Not Found \n');
			return res.end("404 Not Found");
		}
		//else write content with http code 200
		res.writeHead(200, {'Content-Type': 'text/html'});
		console.log("Loading "+q.pathname+" succesfully. \n");
		res.write(data, 'utf-8');
		return res.end();
	});
}).listen(8080);
			