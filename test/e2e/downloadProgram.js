const assert = require('chai').assert;
const expect = require('chai').expect;
const request = require('request');

describe('DownloadProgram::', function() {
	describe('Programs::', function() {
		describe('get', function() {
			it('Should get ULULU split runnable format', function(done) {
				request({
					method: 'GET',
					uri: `http://localhost:3000/v1/downloadProgram/${'ULULU Split'}`,
					json: true
				}, (err, res, body) => {
					assert(!err, JSON.stringify(err));
					expect(res.statusCode).to.be.below(400);
					expect(body.success).to.equal(true);
					expect(body.data.program.length).to.equal(20);
					for(let i = 0; i < 20; i++) {
						expect(body.data.program.workouts[i].movements.length).to.be.greaterThan(0);
					}
					done();
				});
			});
		});
	});
});
