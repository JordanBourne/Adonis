/*global account*/
var suggestedProgram = (function() {
	window.onload = function() {
		checkProgramPreferences();
	};

	function checkProgramPreferences() {
		const recommendedProgram = account.getRecommendedProgram();

		if(recommendedProgram) {
			return appendRecommendProgram(recommendedProgram);
		} else {
			console.log('#####');
			const newUserPrompt = document.getElementById('newUserPrompt');
			return document.body.appendChild(newUserPrompt.content.cloneNode(true));
		}
	}

	function appendRecommendProgram(program) {
		document.body.appendChild(document.getElementById('recommendProgram'));
		document.getElementById('programTitle').innerHTML = program.name;
		return;
	}

	return {

	};
})();
