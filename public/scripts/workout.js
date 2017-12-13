var workout = (function() {
    var currentWorkout;

    function initWorkout(program) {
        currentWorkout = program;
        currentWorkout.exerciseNumber = 1;
        currentWorkout.setNumber = 1;
        displayOverview();
    }

    function displayOverview() {
        var todaysOverview = document.createElement('div');
        var todaysMovements = [];
        currentWorkout.exercises.forEach((exercise) => {
            todaysMovements.push(utility.nameCase(exercise.movement))
        });
        todaysOverview.innerHTML = `
            <h2> Day ${currentWorkout.day} </h2>
            <p id="workout">
                <h3> Overview: </h3>
                ${todaysMovements.join('<br />')} <br />
                <button onclick="workout.startWorkout()">Start Workout</button>
            </p>
        `;
        utility.replaceElements(document.getElementById('todaysWorkout'), todaysOverview);
    }

    function startNextExercise() {
        currentWorkout.supersetNumber = 1;
        var nextExercises = getNextExercises();
        var currentExercise = getCurrentExercise(nextExercises);
        var currentSet = getCurrentSet(currentExercise);

        if(currentSet) {
            return currentSet();
        } else {

        }
    }

    function getNextExercises() {
        return currentWorkout.exercises.filter((exercise) => {
            return exercise.order == currentWorkout.exerciseNumber;
        });
    }

    function getCurrentExercise(nextExercises) {
        return nextExercises.find((exercise) => {
            if(exercise.superset && exercise.superset != currentWorkout.supersetNumber) {
                return false;
            }
            var setIndex = currentWorkout.setNumber - 1;
            if(exercise.sets[setIndex]) {
                return true;
            }
            return false;
        });
    }

    function getCurrentSet(currentExercise) {
        return currentExercise.sets.find((thisSet) => {
            return thisSet.setNumber == currentWorkout.setNumber;
        });
    }

    return {
        init: function(program) {
            initWorkout(program);
        },

        startWorkout: function() {
            startNextExercise();
        }
    }
    /*
    Front End:
    Find workout for the day
    Start at set 0
    Increment set number until finished

    Back End:
    Find exercises with order number 1
        Add first exercise of superset to workoutArray
        Increment superset number until no more workouts
        Add second exercise of superset to workoutArray
        Increment superset......
    Find exercises with order number 2
        ...


    */
})();
