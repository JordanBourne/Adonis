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
    }
}

var request = new HttpClient();

function getPrograms() {
	request.get('http://localhost:3000/v1/getPrograms', function(err, response) {
		if(err) {
			return console.log(err);
		}
		console.log(err, response);
		return console.log(typeof response);
	});
}