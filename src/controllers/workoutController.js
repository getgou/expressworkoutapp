
const { status } = require('express/lib/response');
const workoutService = require('./../services/workoutService')
const getAllWorkouts = (req,res)=>{
    const allWorkouts = workoutService.getAllWorkouts();    
    //res.send("Get all list of workout")
    res.send({status: "OK", data: allWorkouts})
};

const getOneWorkout = (req,res)=>{
    const {
        params: {workoutId}
    } = req;
    if (!workoutId) {
      return;  
    }
    const OneWorkout = workoutService.getOneWorkout(workoutId);
    res.send({status: "OK", data: OneWorkout})
}

const createNewWorkout = (req,res)=>{
    const {body} = req;
    if (
        !body.name ||
        !body.mode ||
        !body.equipment ||
        !body.exercises ||
        !body.trainerTips
       ) {
        return;
    }
    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips
    };

    const createdNewWorkout = workoutService.createNewWorkout(newWorkout);
    //res.send("Create a new workout")
    res.status(201).send({status: "OK",data: createdNewWorkout})
}

const fullUpdateOneWorkout = (req,res)=>{
    const {
        body, params: {workoutId}
    } = req;
    if (!workoutId) {
        return;  
      }
    const fullyUpdatedOneWorkout = workoutService.fullUpdateOneWorkout(workoutId,body);
    res.send({status: "OK", data: fullyUpdatedOneWorkout })
}

const partialUpdateOneWorkout = (req,res)=>{
    const partialyUpdatedOneWorkout = workoutService.partialUpdateOneWorkout();
    res.send("Update an existing workout")
}

const deleteOneWorkout = (req,res)=>{
    const {
        params: {workoutId},
    }=req;
    if (!workoutId) {
        return;  
      }
    const deletedOneWorkout = workoutService.deleteOneWorkout();
    res.status(204).send({status: "OK"})
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    fullUpdateOneWorkout,
    partialUpdateOneWorkout,
    deleteOneWorkout
};

