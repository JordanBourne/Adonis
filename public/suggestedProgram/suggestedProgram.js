/*global account programList utility*/
var suggestedProgram = (function() {
	window.onload = function() {
		checkProgramPreferences();
	};

	function checkProgramPreferences() {
		const recommendedProgram = account.getRecommendedProgram();

		if(recommendedProgram) {
			return appendRecommendProgram(recommendedProgram);
		} else {
			const newUserPrompt = document.getElementById('newUserPrompt');
			return document.body.appendChild(newUserPrompt.content.cloneNode(true));
		}
	}

	function appendRecommendProgram(program) {
		utility.replaceElements(document.body, document.getElementById('suggestedProgram').content.cloneNode(true));
		document.getElementById('programTitle').innerHTML = program.name;
		return;
	}

	function getCurrentPreferences() {
		//get selected preferences from the DOM
		return {
			daysPerWeek: 5,
			goal: 'Look Better'
		};
	}

	return {
		setProgramPreferences: function() {
			const preferences = getCurrentPreferences();
			programList.findRecommendedProgram(preferences, (err, program) => {
				if(err) {
					console.log(err);
				}

				return appendRecommendProgram(program);
			});
		},

		selectProgram: function() {
			const recommendedProgram = account.getRecommendedProgram();

			programList.selectProgram(recommendedProgram, (err) => {
				if(err) {
					console.log(err);
				}

				window.location.href = '../workout/workout.html';
			});
		}
	};
})();
