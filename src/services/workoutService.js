const workoutDB = require('./../database/Workout')


const getAllWorkouts = ()=>{
    const allWorkouts = workoutDB.getAllWorkouts();
    return allWorkouts;
};

const getOneWorkout = ()=>{
    return;
}

const createNewWorkout = ()=>{
    return;
}

const fullUpdateOneWorkout = ()=>{
    return;
}

const partialUpdateOneWorkout = ()=>{
    return;
}

const deleteOneWorkout = ()=>{
    return;
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    fullUpdateOneWorkout,
    partialUpdateOneWorkout,
    deleteOneWorkout
};

