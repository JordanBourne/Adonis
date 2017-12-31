var programList = (function() {
	function showPrograms(programs) {
		var programList = document.createElement('div');
		programs.forEach(function(program) {
			var btn = utility.createButton(program.details.name, function() {
				displayProgramDetails(program);
			});
			programList.appendChild(btn);
		});
		utility.replaceElements(document.getElementById('programList'), programList);
	}

	function displayProgramDetails(program) {
		var programDetails = document.createElement('div');
		programDetails.innerHTML = `
			Name: ${program.details.name} <br />
			Duration:  ${program.details.duration} <br />
			Days Per Week:  ${program.details.daysPerWeek} <br />
			Movements:  ${program.details.movements.join(', ')} <br />
		`;
		var btn = utility.createButton('Choose Program', function() {
			account.selectProgram(program)
		});
		programDetails.appendChild(btn);
		utility.replaceElements(document.getElementById('programDetails'), programDetails);
	}

	return {
		getPrograms: function() {
			httpRequest.post('http://localhost:3000/v1/getPrograms', function(err, response) {
				if(err) {
					return console.log(err);
				}

				const programs = response.data.programs;
				return showPrograms(programs);
			});
		}
	};
})();
