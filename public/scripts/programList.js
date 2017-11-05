function getPrograms() {
	httpRequest.post('http://localhost:3000/v1/getPrograms', function(err, response) {
		if(err) {
			return console.log(err);
		}

        var programs = response.data.programs
        return showPrograms(programs);
	});
}

function showPrograms(programs) {
    var programList = document.createElement('div');
    programs.forEach(function(program) {
        var btn = createButton(program.details.name, function() {
            displayProgramDetails(program);
        });
        programList.appendChild(btn);
    });
    replaceElements(document.getElementById('programList'), programList);
}

function displayProgramDetails(program) {
    var programDetails = document.createElement('div');
    programDetails.innerHTML = 'Name: ' + program.details.name + '<br />' +
    'Duration: ' + program.details.duration + '<br />' +
    'Days Per Week: ' + program.details.daysPerWeek + '<br />' +
    'Movements: ' + program.details.movements.join(', ') + '<br />';
    var btn = createButton('Choose Program', function() {
        selectProgram(program)
    });
    programDetails.appendChild(btn);
    replaceElements(document.getElementById('programDetails'), programDetails);
}

function selectProgram(program) {
    localStorage.setItem('currentProgram', JSON.stringify(program));
    checkForProgram();
}
