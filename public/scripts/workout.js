/*global utility*/
var workout = (function() {
	let currentProgram;
	let finishedSets = [];

	function startWorkout(workout) {
		currentProgram = workout.movements;
		displayExercise(workout.movements.shift());
	}

	function displayExercise(currentSet) {
		finishedSets.push(currentSet);
		document.getElementById('todaysWorkout').innerHTML = `
			<h3> ${currentSet.movement} </h3>
			Weight: ${currentSet.weight} </br>
			Reps: ${currentSet.reps} </br>
			<button onClick="workout.finishSet()">Finish Set</button>
		`;
	}

	function doNextExercise() {
		if(currentProgram.length){
			return displayExercise(currentProgram.shift());
		} else {
			return finishWorkout()
		}
	}

	function finishWorkout() {
		console.log('Nice, you finished the full workout!');
		console.log(finishedSets);
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
