var http = require ('http');
var formidable = require ('formidable');
var fs = require ('fs');

http.createServer(function (req,res) {
	if (req.url == '/fileupload') {
		var form = new formidable.IncomingForm();
		//parsing the form to retreive target and files
		form.parse(req,function(err, fields, files) {
			
			//if some kind of error throw it
			if (err) throw err;
			
			//ELSE
			
			//saving the file
			//old = path in form
			var oldpath = files.filetoupload.path;
			
			//new = custom path ./Files/
			var dir = './Files/';
			
			//create path if does not exist
			if (!fs.existsSync(dir)) fs.mkdirSync(dir);
			
			var newpath = dir+files.filetoupload.name;
			
			//relocating the file using rename
			fs.rename(oldpath, newpath, function(err) {
				if(err) throw err; //handling error
				
				//owise
				res.write('File uploaded and saved!');
				res.end();
			});
		});
	} else {
		fs.readFile("./form.html",function(err,data){
			if(err){
				res.writeHead(404, {'Content-Type':'text/html'});
				return res.end('404 not Found',"utf-8");
			} else {
				res.writeHead(200, {'Content-Type': 'text/html'});
				res.write(data);
				return res.end();
			}
		});
	}
}).listen(8080);

				
		