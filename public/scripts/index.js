function checkForProgram() {
    var currentProgram = JSON.parse(localStorage.getItem('currentProgram'));
    if (currentProgram) {
        document.getElementById('programBody').innerHTML = '<h1>' + currentProgram.details.name + '</h1>';
    }
}

window.onload = function() {
    checkForProgram();
};
