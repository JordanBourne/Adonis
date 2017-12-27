const assert = require('chai').assert;
const expect = require('chai').expect;
const _ = require('lodash');

const ParseProgram = require('../../../sdk/programs').parseProgram;

const simpleProgram = require('../../mocks/programs').simple;


describe('Programs::', function() {
	describe('ParseProgram::', function() {
		describe('Integration::', function() {
		});
		describe('Unit Tests::', function() {
			let parseProgram;
			beforeEach(function() {
				parseProgram = ParseProgram.create({
					program: simpleProgram
				});
			});

			describe('_getProgram', function() {
				it('Should get a simple program', function(done) {
					const parsedProgram = parseProgram.execute();
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
			});
			describe('_parseMovements', function() {
			});
			describe('_parseSet', function() {
			});
			describe('_getNumberOfSets', function() {
			});
			describe('_checkForRepeats', function() {
			});
		});
	});
});
