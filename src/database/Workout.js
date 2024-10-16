const DB= require('./db.json')
const {saveToDatabase} = require('./utils')

const getAllWorkouts = ()=>{
    return DB.workouts;
};

const getOneWorkout = ()=>{
    return;
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
