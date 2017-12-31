const assert = require('chai').assert;
const expect = require('chai').expect;
const request = require('request');
const _ = require('lodash');

describe('ChooseAProgram::', function() {
	let chosenProgram;
	describe('Programs::', function() {
		describe('get', function() {
			it('Should get ULULU split', function(done) {
				request({
					method: 'POST',
					uri: 'http://localhost:3000/v1/getPrograms',
					json: {
						name: 'ULULU Split'
					}
				}, (err, res, body) => {
					assert(!err, JSON.stringify(err));
					expect(res.statusCode).to.be.below(400);
					expect(body.success).to.equal(true);
					chosenProgram = _.find(body.data.programs, (program) => {
						return program.details.name === 'ULULU Split';
					});
					assert(chosenProgram, 'Expected to find ULULU Split');
					done();
				});
			});
		});
	});
});
