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

	function getListOfMovements(workout) {
		const uniqueMovements = [];
		workout.movements.forEach((movement) => {
			if(!uniqueMovements.includes(movement.movement)) {
				uniqueMovements.push(movement.movement);
			}
		});

		return uniqueMovements;
	}

	function checkMissingMaxes(todaysWorkout) {
		const trainingMaxes = account.getTrainingMaxes() || {};
		const missingMaxes = [];
		const todaysMovements = getListOfMovements(todaysWorkout);
		todaysMovements.forEach((movement) => {
			if(!trainingMaxes[movement]) {
				missingMaxes.push(movement);
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
		addOverviewContainer();
		loadMovementHeaders(currentWorkout);
	}

	function addOverviewContainer() {
		const templateBody = document.getElementById('templateBody');
		const movementOverviewTemplate = document.getElementById('movementOverviewTemplate');
		utility.replaceElements(templateBody, movementOverviewTemplate.content.cloneNode(true));
	}

	function loadMovementHeaders(currentWorkout) {
		const movementsToAdd = getListOfMovements(currentWorkout);
		const parentContainer = document.getElementById('movementOverview');
		movementsToAdd.forEach((movement, index) => {
			addMovementContainer(parentContainer, movement, index);
		});
	}

	function addMovementContainer(parentContainer, movement, index) {
		const movementContainer = document.getElementById('movementSetContainerTemplate');
		const movementSets = findMovementSets(movement);
		const setContainer = document.getElementById('movementSetTemplate');

		makeMovementAccordion(movementContainer, movement, index);
		addSetHeader(setContainer, movementContainer);

		movementSets.forEach((set) => {
			addSetToMovement(setContainer, set, movementContainer);
		});

		parentContainer.appendChild(movementContainer.content.cloneNode(true));
	}

	function makeMovementAccordion(container, movement, index) {
		utility.removeAllElements(container.content.querySelector('.movementSets'));
		container.content.querySelector('.accordionLabel').innerHTML = utility.nameCase(movement);
		container.content.querySelector('.accordionInput').id = `tab-${index}`;
		container.content.querySelector('.accordionLabel').setAttribute('for', `tab-${index}`);
	}

	function addSetHeader(setContainer, movementContainer) {
		setContainer.content.querySelector('.movementWeight').innerHTML = 'Weight';
		setContainer.content.querySelector('.movementReps').innerHTML = 'Reps';
		movementContainer.content.querySelector('.movementSets').appendChild(setContainer.content.cloneNode(true));
	}

	function addSetToMovement(setContainer, set, movementContainer) {
		setContainer.content.querySelector('.movementWeight').innerHTML = set.weight || '-';
		setContainer.content.querySelector('.movementReps').innerHTML = set.reps;
		movementContainer.content.querySelector('.movementSets').appendChild(setContainer.content.cloneNode(true));
	}

	function findMovementSets(movement) {
		const matchingMovements = [];
		currentWorkout.movements.forEach((currentMovement) => {
			if(currentMovement.movement === movement) {
				matchingMovements.push(currentMovement);
			}
		});

		return matchingMovements;
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
		},

		expandSection: function(theThing) {
			theThing.className += ' movementExpanded';
		}
	};
})();
