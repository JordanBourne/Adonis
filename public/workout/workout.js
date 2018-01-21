/*global account programList*/
var workout = (function() {
	let currentProgram;
	let programInformation;
	let finishedSets = [];

	window.onload = function() {
		currentProgram = programList.getProgram();
		programInformation = account.getSelectedProgram();
		fillProgramDetails();
	};

	function fillProgramDetails() {
		document.getElementById('workoutTitle').innerHTML = currentProgram.name;
		document.getElementById('workoutDay').innerHTML = `Day ${programInformation.day}`;
		document.getElementById('workoutDescription').innerHTML = programInformation.decription || "Today will be a workout where we focus on doing things and getting stronger";
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
