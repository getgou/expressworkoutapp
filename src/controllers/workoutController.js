
const { status } = require('express/lib/response');
const workoutService = require('./../services/workoutService')
const getAllWorkouts = (req,res)=>{
    const allWorkouts = workoutService.getAllWorkouts();    
    //res.send("Get all list of workout")
    res.send({status: "OK", data: allWorkouts})
};

const getOneWorkout = (req,res)=>{
    const OneWorkout = workoutService.getOneWorkout();
    res.send("Get a workout by ID")
}

const createNewWorkout = (req,res)=>{
    const createdNewWorkout = workoutService.createNewWorkout();
    res.send("Create a new workout")
}

const fullUpdateOneWorkout = (req,res)=>{
    const fullyUpdatedOneWorkout = workoutService.fullUpdateOneWorkout();
    res.send("Update an existing workout")
}

const partialUpdateOneWorkout = (req,res)=>{
    const partialyUpdatedOneWorkout = workoutService.partialUpdateOneWorkout();
    res.send("Update an existing workout")
}

const deleteOneWorkout = (req,res)=>{
    const deletedOneWorkout = workoutService.deleteOneWorkout();
    res.send("A workout deleted")
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    fullUpdateOneWorkout,
    partialUpdateOneWorkout,
    deleteOneWorkout
};

