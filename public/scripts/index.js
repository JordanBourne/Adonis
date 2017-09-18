var HttpClient = function() {
    this.get = function(url, callback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.responseType = 'json';
        anHttpRequest.onreadystatechange = function() {
            if (anHttpRequest.readyState == 4) {
            	if(anHttpRequest.status == 200) {
	                callback(null, anHttpRequest.response);
            	} else {
            		callback({status: anHttpRequest.status, error: anHttpRequest.response})
            	}
            }
        }

        anHttpRequest.open("GET", url, true);
        anHttpRequest.send(null);
    }

    this.post = function(url, params, callback) {
    	if(typeof params === 'function') {
            callback = params;
            params = null;
        }
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.responseType = 'json';
        anHttpRequest.onreadystatechange = function() {
            if (anHttpRequest.readyState == 4) {
            	if(anHttpRequest.status == 200) {
	                callback(null, anHttpRequest.response);
            	} else {
            		callback({status: anHttpRequest.status, error: anHttpRequest.response})
            	}
            }
        }

        anHttpRequest.open("POST", url, true);
        anHttpRequest.send(params);
    };
};

var request = new HttpClient();

function getPrograms() {
	request.get('http://localhost:3000/v1/getPrograms', function(err, response) {
		if(err) {
			return console.log(err);
		}

        var programs = response.data.programs
        return showPrograms(programs);
	});
}

function showPrograms(programs) {
    programs.forEach(function(program) {
        var btn = document.createElement("BUTTON");
        var btnText = document.createTextNode(program.programName);
        btn.appendChild(btnText);
        btn.onclick = function() {
            sessionStorage.setItem('currentProgram', JSON.stringify(program));
            checkForProgram();
        }
        document.getElementById('programList').appendChild(btn);
    });
}

function checkForProgram() {
    var currentProgram = JSON.parse(sessionStorage.getItem('currentProgram'));
    if (currentProgram) {
        document.getElementById('programBody').innerHTML = '<h1>' + currentProgram.programName + '</h1>';
    }
}

window.onload = function() {
    checkForProgram();
};