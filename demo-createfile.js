//importing the modules
var fs = require('fs');
var http = require ('http');
var dt = require('./myfirstmodule');
var mylog = require('./mylog-module');

var mylogfile = 'mylog.txt';

/////CREATING NON EMPTY FILE (Append)
//content in the file to create
var txt = 'HELLO, this is a content created with the append method';
//name of the file to create
var filename = 'mynewfile1.txt' 
fs.appendFile(filename, txt, function(err) {
	if (err) throw err; //throw error
	//message
	var msg = 'File '+filename+' created with appendFile at '+dt.myDateTime();
	//write message into mylog file
	mylog.write(mylogfile,msg);
	//write same message into console
	console.log(msg);
});

////CREATING EMPTY FILE (Open "w")
filename = "mynewfile2.txt";
fs.open(filename, 'w', function(err,file) {
	if (err) throw err;
	msg = 'File '+filename+' (empty) created with open (w) at '+dt.myDateTime();
	mylog.write(mylogfile,msg);
	console.log(msg);
});

////CREATING OR OVERWRITING FILE (WriteFile)
filename = "mynewfile3.txt";
txt = 'HELLO, this is a content created with writeFile method';
fs.writeFile(filename,txt,function(err) {
	if (err) throw err;
	msg = 'File '+filename+' created with writeFile at '+dt.myDateTime();
	mylog.write(mylogfile,msg);
	console.log(msg);
});
