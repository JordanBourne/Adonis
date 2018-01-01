/*global utility account*/
var workout = (function() {
	var currentWorkout;

	function initWorkout(program) {
		const currentDay = account.getCurrentDay();
		currentWorkout = program[currentDay];
		currentWorkout.exerciseNumber = 1;
		// displayOverview();
	}

	// function displayOverview() {
	// 	var todaysOverview = document.createElement('div');
	// 	var todaysMovements = [];
	// 	currentWorkout.exercises.forEach((exercise) => {
	// 		todaysMovements.push(utility.nameCase(exercise.movement));
	// 	});
	// 	todaysOverview.innerHTML = `
	// 		<h2> Day ${currentWorkout.day} </h2>
	// 		<p id="workout">
	// 			<h3> Overview: </h3>
	// 			${todaysMovements.join('<br />')} <br />
	// 			<button onclick="workout.startWorkout()">Start Workout</button>
	// 		</p>
	// 	`;
	// 	utility.replaceElements(document.getElementById('todaysWorkout'), todaysOverview);
	// }
    //
	// function startNextExercise() {
	// 	currentWorkout.supersetNumber = 1;
	// 	var nextExercises = getNextExercises();
	// 	var currentExercise = getCurrentExercise(nextExercises);
	// 	var currentSet = getCurrentSet(currentExercise);
    //
	// 	if(currentSet) {
	// 		return currentSet();
	// 	}
	// }
    //
	// function getNextExercises() {
	// 	return currentWorkout.exercises.filter((exercise) => {
	// 		return exercise.order == currentWorkout.exerciseNumber;
	// 	});
	// }
    //
	// function getCurrentExercise(nextExercises) {
	// 	return nextExercises.find((exercise) => {
	// 		if(exercise.superset && exercise.superset != currentWorkout.supersetNumber) {
	// 			return false;
	// 		}
	// 		var setIndex = currentWorkout.setNumber - 1;
	// 		if(exercise.sets[setIndex]) {
	// 			return true;
	// 		}
	// 		return false;
	// 	});
	// }
    //
	// function getCurrentSet(currentExercise) {
	// 	return currentExercise.sets.find((thisSet) => {
	// 		return thisSet.setNumber == currentWorkout.setNumber;
	// 	});
	// }

	return {
		init: function(program) {
			initWorkout(program);
		},

		startWorkout: function() {
			console.log('I want to start next exercise');
			// startNextExercise();
		}
	};
})();
