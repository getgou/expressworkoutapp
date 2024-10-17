const DB= require('../db.json')
const {saveToDatabase} = require('./utils')

const getAllWorkouts = (filterParams)=>{
    try {
        let workouts = DB.workouts;
        if (filterParams.mode) {
            return DB.workouts.filter((workout) =>
           // workout.mode.toLowerCase().includes(filterParams.mode)
            workout.mode.toLowerCase().includes(filterParams.mode)
            );
        }
    return workouts;
    } catch (error) {
        throw { status: 400, message: error}
    }
    
};

const getOneWorkout = (workoutId)=>{
    try {
        const workout = DB.workouts.find((workout)=>workout.id===workoutId);
        if (!workout) {
            throw {
                status: 400,
                message: `Can't find workout with the id '${workoutId}'`,
              };
          }
        return workout;      
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };  
    }
};

const createNewWorkout = (newWorkout)=>{
    try {        
        const isAlreadyAdded = 
        DB.workouts.findIndex((workout)=> workout.name === newWorkout.name)> -1;
        if (isAlreadyAdded) {
            //return;
            throw {
                status: 400,
                message: `Workout with the name '${newWorkout.name}' already exists`,
              };
        }
        DB.workouts.push(newWorkout);
        saveToDatabase(DB);
        return newWorkout;  
    } catch (error) {
            throw { status: 500, message: error?.message || error };   
        }
        
};

const fullUpdateOneWorkout = (workoutId, changes)=>{
    try {
        const isAlreadyAdded =
        DB.workouts.findIndex((workout) => workout.name === changes.name) > -1;
      if (isAlreadyAdded) {
        throw {
          status: 400,
          message: `Workout with the name '${changes.name}' already exists`,
        };
      }
        const indexForUpdate = DB.workouts.findIndex(
            (workout)=>workout.id === workoutId
        );
        if (indexForUpdate === -1) {
            throw {status: 400,
            message: `Can't find workout with the id '${workoutId}'`,
            };
        }
        const updateWorkout ={
        ...DB.workouts[indexForUpdate],
        ...changes,
        updateAt: new  new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        };
        DB.workouts[indexForUpdate] = updateWorkout;
        saveToDatabase(DB);
        return updateWorkout;   
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error }; 
    }

}

const partialUpdateOneWorkout = ()=>{
    return;
}

const deleteOneWorkout = (workoutId)=>{
    try {
        const indexForDeletion = DB.workouts.findIndex(
            (workout) => workout.id == workoutId
        );
        if (indexForDeletion === -1) {
            throw {
                status: 400,
                message: `Can't find workout with the id '${workoutId}'`,              
            };
    }
    DB.workouts.splice(indexForDeletion, 1);
    saveToDatabase(DB);    
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };    
    }

}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    fullUpdateOneWorkout,
    partialUpdateOneWorkout,
    deleteOneWorkout
};
