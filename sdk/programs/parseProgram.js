const _ = require('lodash');

function ParseProgram(params) {
	this.program = params.program;
	this.parsedProgram = {
		name: params.program.details.name,
		workouts: []
	};
}

ParseProgram.prototype.execute = function() {
	return this._getProgram(this.program);
};

ParseProgram.prototype._getProgram = function() {
	this.program.workouts.forEach((workout) => {
		this.parsedProgram.workouts[Number(workout.day) - 1] = {
			day: workout.day,
			movements: this._parseMovements(workout)
		};
	});

	return this.parsedProgram;
};

ParseProgram.prototype._parseMovements = function(workout) {
	//Input: workout (tests/mocks/programs/simple.js).workouts[0]
	//Output: Array of exercises for the day in sequence
	const todaysWorkout = [];
	const totalExercises = _.last(workout.exercises).order;
	for(let exerciseNumber = 0; exerciseNumber < totalExercises; exerciseNumber++) {
		todaysWorkout.push(this._parseSet(workout, exerciseNumber + 1));
	}
	return _.flatten(todaysWorkout);
};

ParseProgram.prototype._parseSet = function(workout, exerciseNumber) {
	//Input: workout: (tests/mocks/programs/simple.js).workouts[0]
	//Input: exerciseNumber: exercise[n].order
	//Output: Array representing the first set of exercises
	const currentExercises = _.filter(workout.exercises, {
		order: exerciseNumber
	});
	let numberOfSets = this._getNumberOfSets(currentExercises);

	const currentSet = [];
	while(numberOfSets >= 0) {
		for(let i = 0; i < currentExercises.length; i++) {
			const nextSet = currentExercises[i].sets.shift();
			if(nextSet) {
				nextSet.movement = currentExercises[i].movement;
				currentSet.push(nextSet);
			}
		}
		numberOfSets--;
	}

	return currentSet;
};

ParseProgram.prototype._getNumberOfSets = function(exercises) {
	//Input: exercises: Exercises with order n from _parseSet
	//Output: Number: Max set length within given exercises
	let exerciseSets = [];
	for(let i = 0; i < exercises.length; i++) {
		exercises[i].sets = this._checkForRepeats(exercises[i].sets);
		exerciseSets.push(exercises[i].sets.length);
	}

	return Math.max(...exerciseSets);
};

ParseProgram.prototype._checkForRepeats = function(sets) {
	//Input: sets: sets array from given exercise
	//Output: sets array with elements with repeat property repeated
	const finalSets = [];
	while(sets.length) {
		const nextSet = sets.shift();
		if(nextSet.repeat) {
			const repeatAmount = nextSet.repeat;
			for(let i = 0; i < repeatAmount; i++) {
				delete nextSet.repeat;
				finalSets.push(nextSet);
			}
		} else {
			finalSets.push(nextSet);
		}
	}

	return finalSets;
};

module.exports = {
	create: function (params) {
		return new ParseProgram(params);
	}
};
