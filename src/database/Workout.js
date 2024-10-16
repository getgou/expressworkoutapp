const DB= require('./../db.json')
const {saveToDatabase} = require('./utils')

const getAllWorkouts = ()=>{
    return DB.workouts;
};

const getOneWorkout = (workoutId)=>{
    const workout = DB.workouts.find((workout)=>workout.id===workoutId);
    if (!workoutId) {
        return;  
      } 
    return workout;
}

const createNewWorkout = (newWorkout)=>{
const isAlreadyAdded = 
DB.workouts.findIndex((workout)=> workout.name === newWorkout.name)> -1;
if (isAlreadyAdded) {
    return;
}

DB.workouts.push(newWorkout);
saveToDatabase(DB);
return newWorkout;
};

const fullUpdateOneWorkout = (workoutId, changes)=>{
    const indexForUpdate = DB.workouts.findIndex(
        (workout)=>workout.id === workoutId
    );
    if (indexForUpdate === -1) {
        return;  
    }
    const updateWorkout ={
    ...DB.workouts[indexForUpdate],
    ...changes,
    updateAt: new  new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    DB.workouts[indexForUpdate] = updateWorkout;
    saveToDatabase(DB);
    return updateWorkout;
}

const partialUpdateOneWorkout = ()=>{
    return;
}

const deleteOneWorkout = (workoutId)=>{
    const indexForDeletion = DB.workouts.findIndex(
        (workout) => workout.id == workoutId
    );
    if (indexForDeletion === -1) {
        return;  
    }
DB.workouts.splice(indexForDeletion, 1);
saveToDatabase(DB);
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    fullUpdateOneWorkout,
    partialUpdateOneWorkout,
    deleteOneWorkout
};
