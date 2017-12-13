var account = (function() {
    return {
        getProgram: function() {
            return JSON.parse(localStorage.getItem('currentProgram'));
        },

        getTrainingMaxes: function() {
            return JSON.parse(localStorage.getItem('trainingMaxes'));
        },

        selectProgram: function(program) {
            localStorage.setItem('currentProgram', JSON.stringify(program));
            runProgram.checkForProgram();
        },

        saveMaxes: function(newMaxes) {
            var currentMaxes = account.getTrainingMaxes() || {};
            newMaxes.forEach((max) => {
                currentMaxes[max.movement] = max.value;
            });
            localStorage.setItem('trainingMaxes', JSON.stringify(currentMaxes));
        }
    }
})();
