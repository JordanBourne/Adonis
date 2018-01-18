/*global account*/
var workout = (function() {
	let currentProgram;
	let finishedSets = [];

	window.onload = function() {
		currentProgram = programList.getProgram();
		writeHeader();
	};

	function writeHeader() {
		document.getElementById('header').innerHTML = currentProgram.name;
	}

	function startWorkout(workout) {
		currentProgram = workout;
		displayExercise(currentProgram.movements.shift());
	}

	function displayExercise(currentSet) {
		finishedSets.push(currentSet);
		document.getElementById('todaysWorkout').innerHTML = `
			<h3> ${currentSet.movement} </h3>
			Set Number: ${currentSet.setNumber} </br>
			${(currentSet.weight ? `Weight: ${currentSet.weight} </br>` : '')}
			Reps: ${currentSet.reps} </br>
			<button onClick="workout.finishSet()">Finish Set</button>
		`;
	}

	function doNextExercise() {
		if(currentProgram.movements.length){
			return displayExercise(currentProgram.movements.shift());
		} else {
			return finishWorkout();
		}
	}

	function finishWorkout() {
		account.saveCompletedWorkout(finishedSets);
		document.getElementById('todaysWorkout').innerHTML = `
			<h3> You've finished day ${currentProgram.day}!</h3>
			<button onClick="runProgram.startProgram()">Start Next Day</button>
		`;
	}

	return {
		init: function(workout) {
			startWorkout(workout);
		},

		finishSet: function() {
			doNextExercise();
		}
	};
})();
