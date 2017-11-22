var StaticServer = require('static-server');

var server = new StaticServer({
	rootPath: '.',
	port: 9080
});

console.log('server starting');
server.start(function() {
	console.log('STARTED');
	console.log('Server listening to', server._socket.address().port);
});
console.log('server started');
