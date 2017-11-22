casper.test.begin('TEST1 ', function suite(test) {
	casper.start();

	casper.thenOpen("http://localhost:9080/test.html", function() {
		console.log('this.getTitle()'+this.getTitle()); 
    });

    casper.run(function() {
		test.done();
    });
});

