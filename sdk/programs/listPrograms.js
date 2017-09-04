const async = require('async');
const _ = require('lodash');

const testProgram = require('../../config/createProgram'); //replace with dynamoDB

const dependencies = {
    //dynamoDB
}

function ListPrograms(params) {
    this.filters = params.filters;
    this.programs = [];
}

ListPrograms.prototype.execute = function(callback) {
    async.series([
        this._getPrograms.bind(this),
        this._filterPrograms.bind(this)
    ], (err) => {
        if(err) {
            return callback(err);
        }

        return callback(null, this.programs);
    });
};

ListPrograms.prototype._getPrograms = function(callback) {
    //get all the programs from DynamoDB
    this.programs.push(testProgram);
    callback();
};

ListPrograms.prototype._filterPrograms = function(callback) {
    let filters = _.keys(this.filters);
    let filteredPrograms = _.filter(this.programs, (program) => {
        return filters.every((filter) => {
            return program[filter] === this.filters[filter];
        });
    });

    this.programs = filteredPrograms;
    callback();
};

module.exports = {
    create: function(params) {
        return new ListPrograms(params);
    },
    dependencies
}
