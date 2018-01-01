const assert = require('chai').assert;
const expect = require('chai').expect;

const DownloadProgram = require('../../../sdk/programs').downloadProgram;

describe('Programs::', function() {
	describe('DownloadProgram::', function() {
		describe('Integration::', function() {
			it('Should get a simple program', function(done) {
				DownloadProgram.create({
					programName: 'ULULU Split'
				}).execute((err, results) => {
					assert(results, 'There should be a full program');
					expect(results.workouts[0].movements.length).to.equal(22);
					return done();
				});
			});
		});
	});
});
