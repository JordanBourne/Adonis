var account = (function() {
	function downloadProgram(programName) {
		httpRequest.get(`http://localhost:3000/v1/downloadProgram/${programName}`, (err, response) => {
			if(err) {
				console.log(err);
			}

			const programData = response.data.programData;
			localStorage.setItem('currentProgram', programData);
			return programData;
		});
	}

	return {
		getProgram: function() {
			if(localStorage.getItem('currentProgram')) {
				return JSON.parse(localStorage.getItem('currentProgram'));
			}
			return downloadProgram(localStorage.getItem('selectedProgram'));
		},

		getTrainingMaxes: function() {
			return JSON.parse(localStorage.getItem('trainingMaxes'));
		},

		saveMaxes: function(newMaxes) {
			var currentMaxes = account.getTrainingMaxes() || {};
			newMaxes.forEach((max) => {
				currentMaxes[max.movement] = max.value;
			});
			localStorage.setItem('trainingMaxes', JSON.stringify(currentMaxes));
		}
	};
})();
