/*global httpRequest*/
var account = (function() {
	function saveProgramInfo(program) {
		let programInformation = {
			name: program.details.name,
			day: 1
		};
		localStorage.setItem('programInformation', JSON.stringify(programInformation));
		return programInformation;
	}

	return {
		getTrainingMaxes: function() {
			return JSON.parse(localStorage.getItem('trainingMaxes'));
		},

		getCurrentDay: function() {
			return JSON.parse(localStorage.getItem('programInformation')).day;
		},

		getRecommendedProgram: function() {
			return JSON.parse(localStorage.getItem('recommendedProgram'));
		},

		incrementDay: function() {
			let currentInfo = JSON.parse(localStorage.getItem('programInformation'));
			currentInfo.day++;
			return localStorage.setItem('programInformation', JSON.stringify(currentInfo));
		},

		selectProgram: function(program) {
			const programInformation = saveProgramInfo(program);

			return downloadProgram(programInformation);
		},

		saveCompletedWorkout: function(completedWorkout) {
			let completedWorkouts = JSON.parse(localStorage.getItem('completedWorkouts')) || {};
			const programName = account.selectedProgramName();

			if (completedWorkouts[programName]) {
				completedWorkouts[programName].workouts[account.getCurrentDay] = completedWorkout;
			} else {
				completedWorkouts[programName] = {
					workouts: [completedWorkout]
				};
			}

			account.incrementDay();
			return localStorage.setItem('completedWorkouts', JSON.stringify(completedWorkouts));
		},

		saveMaxes: function(newMaxes) {
			var currentMaxes = account.getTrainingMaxes() || {};
			newMaxes.forEach((max) => {
				currentMaxes[max.movement] = max.value;
			});
			localStorage.setItem('trainingMaxes', JSON.stringify(currentMaxes));
		},

		selectedProgramName: function() {
			return JSON.parse(localStorage.getItem('programInformation')).name;
		},

		setRecommendedProgram: function(program) {
			return localStorage.setItem('recommendedProgram', JSON.stringify(program));
		}
	};
})();
