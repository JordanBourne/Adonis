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
        var btn = createButton(program.programName, function() {
            sessionStorage.setItem('currentProgram', JSON.stringify(program));
            checkForProgram();
        });
        programList.appendChild(btn);
    });
    replaceElements(document.getElementById('programList'), programList);
}
