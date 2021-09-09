var events = require ('events');

//event emitter
var emitter = new events.EventEmitter();

//events handlers
var ScreamHandler = function() {
	console.log('I hear a scream !');
}

var LaughHandler = function() {
	console.log('I hear laughs !');
}

//assign handlers to events :
emitter.on('scream',ScreamHandler);
emitter.on('laughs',LaughHandler);

//file both events :
emitter.emit('scream');
emitter.emit('laughs');
