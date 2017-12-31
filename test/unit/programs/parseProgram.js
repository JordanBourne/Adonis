const assert = require('chai').assert;
const expect = require('chai').expect;

const ParseProgram = require('../../../sdk/programs').parseProgram;

const simpleProgram = require('../../mocks/programs').simple;
const supersetRepeats = require('../../mocks/programs').supersetRepeats;

describe('Programs::', function() {
	let parsedProgram;

	beforeEach(function() {
	});

	describe('ParseProgram::', function() {
		describe('Integration::', function() {
			it('Should get a simple program', function(done) {
				parsedProgram = ParseProgram.create({
					program: simpleProgram
				}).execute();
				assert(parsedProgram, 'There should be a parsed program');
				expect(parsedProgram[0].movements).to.deep.equal([
					{
						movement: 'bench',
						setNumber: '1',
						weight: '75',
						weightType: 'relative',
						reps: '5',
						plusSet: false
					}
				]);
				expect(parsedProgram[1].movements).to.deep.equal([
					{
						movement: 'squat',
						setNumber: '1',
						weight: '75',
						weightType: 'relative',
						reps: '5',
						plusSet: false
					}
				]);
				return done();
			});
			it('Program with repeated supersets should work', function(done) {
				parsedProgram = ParseProgram.create({
					program: supersetRepeats
				}).execute();
				assert(parsedProgram, 'There should be a parsed program');
				expect(parsedProgram[0].movements).to.deep.equal([
					{
						movement: 'bench',
						setNumber: '1',
						weight: '75',
						weightType: 'relative',
						reps: '5',
						plusSet: false
					},
					{
						movement: 'row',
						setNumber: '1',
						weight: '75',
						weightType: 'relative',
						reps: '5',
						plusSet: false
					},
					{
						movement: 'bench',
						setNumber: '1',
						weight: '75',
						weightType: 'relative',
						reps: '5',
						plusSet: false
					},
					{
						movement: 'row',
						setNumber: '1',
						weight: '75',
						weightType: 'relative',
						reps: '5',
						plusSet: false
					},
				]);
				return done();
			});
		});
	});
});
