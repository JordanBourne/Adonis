/*global httpRequest*/
var account = (function() {
	function downloadProgram(programInfo) {
		if(!programInfo) {
			return;
		}

		httpRequest.get(`http://localhost:3000/v1/downloadProgram/${programInfo.name}`, (err, response) => {
			if(err) {
				console.log(err);
			}

			const programData = response.data.program;
			localStorage.setItem('currentProgram', JSON.stringify(programData));
			return programData;
		});
	}

	function saveProgramInfo(program) {
		let programInformation = {
			name: program.details.name,
			day: 1
		};
		localStorage.setItem('programInformation', JSON.stringify(programInformation));
		return programInformation;
	}

	return {
		getProgram: function() {
			if(localStorage.getItem('currentProgram')) {
				return JSON.parse(localStorage.getItem('currentProgram'));
			}
			return downloadProgram(localStorage.getItem('programInformation'));
		},

		getTrainingMaxes: function() {
			return JSON.parse(localStorage.getItem('trainingMaxes'));
		},

		getCurrentDay: function() {
			return JSON.parse(localStorage.getItem('programInformation')).day;
		},

		selectProgram: function(program) {
			const programInformation = saveProgramInfo(program);

			return downloadProgram(programInformation);
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
