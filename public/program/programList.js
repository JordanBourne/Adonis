/*global account utility httpRequest*/
var programList = (function() {
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

	function saveSelectedProgram(program) {
		program.day = 1;
		return localStorage.setItem('selectedProgram', JSON.stringify(program));
	}

	// function showPrograms(programs) {
	// 	var listOfPrograms = document.createElement('div');
	// 	programs.forEach(function(program) {
	// 		var btn = utility.createButton(program.details.name, function() {
	// 			displayProgramDetails(program);
	// 		});
	// 		listOfPrograms.appendChild(btn);
	// 	});
	// 	utility.replaceElements(document.getElementById('programList'), listOfPrograms);
	// }
    //
	// function displayProgramDetails(program) {
	// 	var programDetails = document.createElement('div');
	// 	programDetails.innerHTML = `
	// 		Name: ${program.details.name} <br />
	// 		Duration:  ${program.details.duration} <br />
	// 		Days Per Week:  ${program.details.daysPerWeek} <br />
	// 		Movements:  ${program.details.movements.join(', ')} <br />
	// 	`;
	// 	var btn = utility.createButton('Choose Program', function() {
	// 		account.selectProgram(program);
	// 	});
	// 	programDetails.appendChild(btn);
	// 	utility.replaceElements(document.getElementById('programDetails'), programDetails);
	// }

	return {
		// getPrograms: function() {
		// 	httpRequest.post('http://localhost:3000/v1/getPrograms', function(err, response) {
		// 		if(err) {
		// 			return console.log(err);
		// 		}
        //
		// 		const programs = response.data.programs;
		// 		return showPrograms(programs);
		// 	});
		// },
		getProgram: function() {
			if(localStorage.getItem('currentProgram')) {
				return JSON.parse(localStorage.getItem('currentProgram'));
			}
			return downloadProgram(localStorage.getItem('selectedProgram'));
		},

		findRecommendedProgram: function(params, callback) {
			setTimeout(function() {
				let program = {
					'name': 'ULULU Split'
				}
				account.setRecommendedProgram(program);

				return callback(null, program);
			}, 1000);
			// httpRequest.post('http://localhost:3000/v1/getRecommendedPrograms', {
			// 	daysPerWeek: params.days,
			// 	experienceLevel: params.experienceLevel || 'beginner',
			// 	goal: params.goal
			// }, function(err, response) {
			// 	if(err) {
			// 		return console.log(err);
			// 	}
            //
			// 	const program = response.data.program;
			// 	return account.setRecommendedProgram(program);
			// });
		},

		selectProgram: function(program, callback = function() {}) {
			saveSelectedProgram(program);
			downloadProgram(program);

			return callback();
		}
	};
})();
