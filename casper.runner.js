var spawn = require("child_process").spawn;
var child = spawn("node", ['test/server.js']);

var started = false;

child.stdout.on("data", function(data) {
	console.log("spawnSTDOUT:", JSON.stringify(data));
	if (data=='STARTED\n') {
		started = true;
	}
})

child.stderr.on("data", function(data) {
	console.log("spawnSTDERR:", JSON.stringify(data))
})

child.on("exit", function(code) {
	console.log("spawnEXIT:", code)
})


casper.test.begin('wait mock server running', function waitServer(test) {
	casper.start();
	casper.waitFor(function spinningForServer() {
		return started;
	}, null, function(){
		console.log('server starting is timedout')
		casper.exit(1);
	});
	casper.run(function() {
		test.done();
	});
});

require('./casper.testsuite');
