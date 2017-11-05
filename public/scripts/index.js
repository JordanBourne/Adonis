function checkForProgram() {
    var currentProgram = JSON.parse(sessionStorage.getItem('currentProgram'));
    if (currentProgram) {
        document.getElementById('programBody').innerHTML = '<h1>' + currentProgram.programName + '</h1>';
    }
}

window.onload = function() {
    checkForProgram();
};
