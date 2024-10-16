
const { v4:uuid} = require('uuid')
const workoutDB = require('./../database/Workout')

const getAllWorkouts = ()=>{
    const allWorkouts = workoutDB.getAllWorkouts();
    return allWorkouts;
};

const getOneWorkout = (workoutId)=>{
    const workout = workoutDB.getOneWorkout(workoutId)
    return workout;
}

const createNewWorkout = (newWorkout)=>{
    workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    const createdWorkout = workoutDB.createNewWorkout(workoutToInsert);
    return createdWorkout;
}

const fullUpdateOneWorkout = (workoutId, changes)=>{
    const updatedWorkout = workoutDB.fullUpdateOneWorkout(workoutId,changes);
    return updatedWorkout;
}

const partialUpdateOneWorkout = ()=>{
    return;
}

const deleteOneWorkout = (workoutId)=>{
    workoutDB.deleteOneWorkout(workoutId);
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

