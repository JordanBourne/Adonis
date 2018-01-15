/*global account*/
(function() {
	let currentProgram;

	function writeHeader() {
		document.getElementById('header').innerHTML = currentProgram.name;
	}

	window.onload = function() {
		currentProgram = account.getProgram();
		writeHeader();
	};
})();
