/*global account programList utility*/
var workout = (function() {
	let currentWorkout;
	let finishedSets = [];

	window.onload = function() {
		const programInformation = account.getSelectedProgram();
		fillProgramDetails(programInformation);
	};

	function fillProgramDetails(programInformation) {
		const templateBody = document.getElementById('templateBody');
		const overviewTemplate = document.getElementById('overviewTemplate');
		utility.replaceElements(templateBody, overviewTemplate.content.cloneNode(true));
		document.getElementById('workoutTitle').innerHTML = programInformation.name;
		document.getElementById('workoutDay').innerHTML = `Day ${programInformation.day}`;
		document.getElementById('workoutDescription').innerHTML = programInformation.decription || 'Today will be a workout where we focus on doing things and getting stronger';
	}

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
		const templateBody = document.getElementById('templateBody');
		const missingMaxesTemplate = document.getElementById('missingMaxesTemplate');
		utility.replaceElements(templateBody, missingMaxesTemplate.content.cloneNode(true));

		const maxesMovements = document.getElementById('maxesMovements');
		missingMaxes.forEach((missingMax) => {
			const movementName = utility.nameCase(missingMax);
			const missingMaxTemplate = document.getElementById('missingMaxTemplate');
			missingMaxTemplate.content.querySelector('.missingMaxTitle').innerHTML = movementName;
			missingMaxTemplate.content.querySelector('.missingMaxWeight').setAttribute('id', missingMax);
			maxesMovements.appendChild(missingMaxTemplate.content.cloneNode(true));
			// inputFields.push(`${movementName}: <input type="number" id="${missingMax}" required></input>`);
		});
	}

	function startWorkout(workout) {
		currentWorkout = workout;
		displayExercise(currentWorkout.movements.shift());
	}

	function displayExercise(currentSet) {
		finishedSets.push(currentSet);
		document.getElementById('todaysWorkout').innerHTML = `
			<h3> ${currentSet.movement} </h3>
			Set Number: ${currentSet.setNumber} </br>
			${(currentSet.weight ? `Weight: ${currentSet.weight} </br>` : '')}
			Reps: ${currentSet.reps} </br>
			<button onClick=".finishSet()">Finish Set</button>
		`;
	}

	function doNextExercise() {
		if(currentWorkout.movements.length){
			return displayExercise(currentWorkout.movements.shift());
		} else {
			return finishWorkout();
		}
	}

	function finishWorkout() {
		account.saveCompletedWorkout(finishedSets);
		document.getElementById('todaysWorkout').innerHTML = `
			<h3> You've finished day ${currentWorkout.day}!</h3>
			<button onClick="workout.startProgram()">Start Next Day</button>
		`;
	}

	return {
		startProgram: function() {
			var program = programList.getProgram();
			var currentDay = account.getCurrentDay();
			var todaysWorkout = findTodaysWorkout(program, currentDay);
			var missingMaxes = checkMissingMaxes(todaysWorkout);
			if(missingMaxes.length) {
				getMissingMaxes(missingMaxes);
			} else {
				workout.initWorkout(todaysWorkout);
			}
		},

		saveMaxes: function() {
			var missingMaxes = [];
			var maxesInputContainer = document.getElementById('maxesMovements');
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
			workout.startProgram();
		},

		initWorkout: function(workout) {
			return startWorkout(workout);
		},

		finishSet: function() {
			doNextExercise();
		}
	};
})();
