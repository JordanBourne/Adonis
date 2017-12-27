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

			describe('_getProgram', function(done) {
				const parsedProgram = parseProgram.execute();
				assert(parsedProgram);
				expect(parsedProgram[0].movements).to.deep.equal([
					{
						setNumber: '1',
						weight: '75',
						weightType: 'relative',
						reps: '5',
						plusSet: false
					}
				]);
				expect(parsedProgram[1].movements).to.deep.equal([
					{
						setNumber: '1',
						weight: '75',
						weightType: 'relative',
						reps: '5',
						plusSet: false
					}
				]);
				return done();
			});
			describe('_parseMovements', function(done) {
				return done();
			});
			describe('_parseSet', function(done) {
				return done();
			});
			describe('_getNumberOfSets', function(done) {
				return done();
			});
			describe('_checkForRepeats', function(done) {
				return done();
			});
		});
	});
});
