/*global account utility workout*/
var runProgram = (function() {
	function findTodaysWorkout(program, currentDay) {
		return program.workouts.find((dailyWorkout) => {
			return dailyWorkout.day === currentDay;
		});
	}

	function checkMissingMaxes(todaysWorkout) {
		var trainingMaxes = account.getTrainingMaxes() || {};
		var missingMaxes = [];
		todaysWorkout.movements.forEach((exercise) => {
			if(!trainingMaxes[exercise.movement] && !missingMaxes.includes(exercise.movement)) {
				missingMaxes.push(exercise.movement);
			}
		});

		return missingMaxes;
	}

	function getMissingMaxes(missingMaxes) {
		if (document.getElementById('getMissingMaxes')) {
			document.getElementById('getMissingMaxes').remove();
		}
		var inputFields = [];
		inputFields.push(`
			<div id="getMissingMaxes">
				Please enter your max lifts for the workout today: <br />`);
		missingMaxes.forEach((missingMax) => {
			var movementName = utility.nameCase(missingMax);
			inputFields.push(`${movementName}: <input type="number" id="${missingMax}" required></input>`);
		});
		inputFields.push(`
				<button onclick="runProgram.saveMaxes()">Submit</button><br />
			</div>`);
		utility.addToElement('programBody', inputFields.join(' <br />'));
	}

	return {
		checkForProgram: function() {
			var currentProgram = programList.getProgram();
			if (currentProgram) {
				document.getElementById('programBody').innerHTML = `
					<h1> ${currentProgram.name} </h1>
					<a href="workout.html"><button>Start Next Workout</button></a>
				`;
			}
		},

		startProgram: function() {
			var program = programList.getProgram();
			var currentDay = account.getCurrentDay();
			var todaysWorkout = findTodaysWorkout(program, currentDay);
			var missingMaxes = checkMissingMaxes(todaysWorkout);
			if(missingMaxes.length) {
				getMissingMaxes(missingMaxes);
			} else {
				workout.init(todaysWorkout);
			}
		},

		saveMaxes: function() {
			var missingMaxes = [];
			var maxesInputContainer = document.getElementById('getMissingMaxes');
			var inputFields = Array.from(maxesInputContainer.getElementsByTagName('input'));
			inputFields.forEach((element) => {
				if(!missingMaxes.includes(`${element.id}`) && element.type === 'number') {
					missingMaxes.push({
						movement: element.id,
						value: element.value
					});
				}
			});
			account.saveMaxes(missingMaxes);
			runProgram.startProgram();
		}
	};
})();
