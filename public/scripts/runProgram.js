var runProgram = (function() {
	function findTodaysWorkout(program) {
		var currentDay = program.currentDay || 1;
		return program.workouts.find((dailyWorkout) => {
			return dailyWorkout.day === String(currentDay);
		});
	}

	function checkMissingMaxes(todaysWorkout) {
		var trainingMaxes = account.getTrainingMaxes() || {};
		var missingMaxes = [];
		todaysWorkout.exercises.forEach((exercise) => {
			if(!trainingMaxes[exercise.movement] && !missingMaxes.includes(exercise.movement)) {
				missingMaxes.push(exercise.movement);
			}
		});

		return missingMaxes;
	}

	function getMissingMaxes(missingMaxes) {
		var inputFields = [];
		inputFields.push(`
			Please enter your max lifts for the workout today: <br />
				<div id="getMissingMaxes">`);
		missingMaxes.forEach((missingMax) => {
			var movementName = utility.nameCase(missingMax);
			inputFields.push(`${movementName}: <input type="number" id="${missingMax}" required></input>`);
		});
		inputFields.push(`
				<button onclick="runProgram.saveMaxes()">Submit</button><br />
			</div>`);
		utility.addToElement('programBody', inputFields.join(' <br />'));
	}

	function checkForProgram() {
		var currentProgram = account.getProgram();
		if (currentProgram) {
			document.getElementById('programBody').innerHTML = `
				<h1> ${currentProgram.details.name} </h1>
				<button onClick="runProgram.startProgram()">Start Next Workout</button>
			`;
		}
	}

	return {
		selectProgram: function(program) {
			localStorage.setItem('selectedProgram', program.details.name);
			checkForProgram();
		},

		startProgram: function() { //start here on new refactor
			var program = account.getProgram();
			var todaysWorkout = findTodaysWorkout(program);
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
