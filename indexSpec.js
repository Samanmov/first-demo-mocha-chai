var expect = require('chai').expect;
var word = require('./index.js');

describe('Sanitize', function() {
	it('returns lowercase of a string', function() {
		var inputWord = 'HELLO WORLD';
		var outputWord = word.sanitize(inputWord);

		expect(outputWord).to.equal('hello world');
		expect(outputWord).to.be.a('string');
		expect(outputWord).to.contain('hello');
	});

	it('remove any hyphen', function() {
		var inputWord = 'HELLO-WORLD';
		var outputWord = word.sanitize(inputWord);

		expect(outputWord).to.equal('hello world');
	});
});