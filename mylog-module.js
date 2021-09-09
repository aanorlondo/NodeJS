//this shows how the appendFile method can be used using a module
//this module is used in the "demo-createfile.js" to manage writing activity in a logfile

var fs = require ('fs');
exports.write = function(filename,msg){
	fs.appendFile(filename,msg+"\n",function(err){
		if (err) throw err;
	});
};
