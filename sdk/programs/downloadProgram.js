const async = require('async');
const testProgram = require('../../config/createProgram'); //replace with dynamoDB

const dependencies = {
	//dynamoDB,
	ParseProgram: require('./parseProgram.js')
};

function DownloadProgram(params) {
	this.programName = params.programName;
}

DownloadProgram.prototype.execute = function(callback) {
	async.series([
		this._getProgram.bind(this),
		this._parseProgram.bind(this)
	], (err) => {
		if (err) {
			return callback(err);
		}

		return callback(null, this.parsedProgram);
	});
};

DownloadProgram.prototype._getProgram = function(callback) {
	//find the program from the database by using this.programName
	this.program = testProgram;
	return callback();
};

DownloadProgram.prototype._parseProgram = function(callback) {
	this.parsedProgram = dependencies.ParseProgram.create({
		program: this.program
	}).execute();
	return callback();
};

module.exports = {
	create: function(params) {
		return new DownloadProgram(params);
	},
	dependencies
};
