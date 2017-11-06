var runProgram = (function() {
    function findTodaysWorkout(program) {
        var currentDay = program.currentDay || 1;
        return program.workouts.find((workout) => {
            return workout.day === String(currentDay);
        });
    }

    function checkMissingMaxes(todaysWorkout) {
        var trainingMaxes = account.getTrainingMaxes() || {};
        var missingMaxes = [];
        todaysWorkout.exercises.forEach((exercise) => {
            if(!trainingMaxes[exercise.movement] && !missingMaxes.includes(exercise.movement)) {
                missingMaxes.push(exercise.movement);
            }
        });

        return missingMaxes;
    }

    function getMissingMaxes(missingMaxes) {
        var inputFields = [];
        inputFields.push(`
            Please enter your max lifts for the workout today: <br />
                <div id="getMissingMaxes">`)
        missingMaxes.forEach((missingMax) => {
            var movementName = missingMax.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1")
            inputFields.push(`${movementName}: <input type="number" id="${missingMax}" required></input>`);
        })
        inputFields.push(`
                <button onclick="runProgram.saveMaxes()">Submit</button><br />
            </div>`)
        utility.addToElement('programBody', inputFields.join(' <br />'));
    }

    return {
        checkForProgram: function() {
            var currentProgram = account.getProgram();
            if (currentProgram) {
                document.getElementById('programBody').innerHTML = `
                    <h1> ${currentProgram.details.name} </h1>
                    <button onClick="runProgram.startProgram()">Start Next Workout</button>
                `;
            }
        },

        startProgram: function() {
            var program = account.getProgram();
            var todaysWorkout = findTodaysWorkout(program);
            var missingMaxes = checkMissingMaxes(todaysWorkout);
            if(missingMaxes.length) {
                getMissingMaxes(missingMaxes);
            } else {
                workout.startWorkout(todaysWorkout);
            }
        },

        saveMaxes: function() {
            var missingMaxes = [];
            var maxesInputContainer = document.getElementById('getMissingMaxes')
            var inputFields = Array.from(maxesInputContainer.getElementsByTagName('input'));
            inputFields.forEach((element) => {
                if(!missingMaxes.includes(`${element.id}`) && element.type === 'number') {
                    missingMaxes.push({
                        movement: element.id,
                        value: element.value
                    })
                }
            });
            account.saveMaxes(missingMaxes);
            runProgram.startProgram();
        }
    }
})();
