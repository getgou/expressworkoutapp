
const { v4:uuid} = require('uuid')
const workoutDB = require('../database/Workout')

const getAllWorkouts = ()=>{
    try {
        const allWorkouts = workoutDB.getAllWorkouts();
        return allWorkouts;   
    } catch (error) {
      throw error  
    }

};

const getOneWorkout = (workoutId)=>{
    try {
        const workout = workoutDB.getOneWorkout(workoutId)
        return workout;  
    } catch (error) {
        throw error
    }

}

const createNewWorkout = (newWorkout)=>{
    workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    try {
        const createdWorkout = workoutDB.createNewWorkout(workoutToInsert);
        return createdWorkout;   
    } catch (error) {
        throw error;
    }

}

const fullUpdateOneWorkout = (workoutId, changes)=>{
    try {
    const updatedWorkout = workoutDB.fullUpdateOneWorkout(workoutId,changes);
    return updatedWorkout;    
    } catch (error) {
      throw error;  
    }

}

const partialUpdateOneWorkout = ()=>{
    return;
}

const deleteOneWorkout = (workoutId)=>{
    try {
    workoutDB.deleteOneWorkout(workoutId);
    return;    
    } catch (error) {
        throw error
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

