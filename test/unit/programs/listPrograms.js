const assert = require('chai').assert;
const expect = require('chai').expect;
// const sinon = require('sinon');

const ListPrograms = require('../../../sdk/programs').listPrograms;

describe('Programs::', function() {
	// let sandbox;

	beforeEach(function() {
	});

	afterEach(function() {
	});

	describe('ListPrograms::', function() {
		describe('_getPrograms', function() {
			it('should handle error from DynamoDB call', function(done) {
				done();
			});
			it('should get a list of all of the programs', function(done) {
				done();
			});
		});
		describe('_filterPrograms', function() {
			it('should filter a list of programs', function(done) {
				ListPrograms.create({
					filters: {
						duration: '28'
					}
				}).execute((err, programs) => {
					assert(!err, JSON.stringify(err));
					expect(programs.length).to.equal(1);
					done();
				});
			});
			it('should handle no results', function(done) {
				ListPrograms.create({
					filters: {
						duration: '280'
					}
				}).execute((err, programs) => {
					assert(!err, JSON.stringify(err));
					expect(programs.length).to.equal(0);
					done();
				});
			});
		});
	});
});
