
const { v4:uuid} = require('uuid')
const workoutDB = require('./../database/Workout')

const getAllWorkouts = ()=>{
    const allWorkouts = workoutDB.getAllWorkouts();
    return allWorkouts;
};

const getOneWorkout = ()=>{
    return;
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

