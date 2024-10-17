
const { status } = require('express/lib/response');
const workoutService = require('../services/workoutService')

const getAllWorkouts = (req,res)=>{
    const { mode } = req.query;
    try {
        const allWorkouts = workoutService.getAllWorkouts({ mode });    
        //res.send("Get all list of workout")
        res.send({status: "OK", data: allWorkouts})   
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });  
    }

};

const getOneWorkout = (req,res)=>{
    const {
        params: {workoutId}
    } = req;
    if (!workoutId) {
        res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Parameter ':workoutId' can not be empty" },
      });
    }
    try {
    const OneWorkout = workoutService.getOneWorkout(workoutId);
    res.send({status: "OK", data: OneWorkout})    
    } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });    
    }

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
        res
        .status(400)
        .send({
          status: "FAILED",
          data: {
            error:
              "One of the following keys is missing or is empty in request body: 'name', 'mode', 'equipment', 'exercises', 'trainerTips'",
          },
        });
        return;
    }
    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips
    };
try {
    const createdNewWorkout = workoutService.createNewWorkout(newWorkout);
    //res.send("Create a new workout")
    res.status(201).send({status: "OK",data: createdNewWorkout})  
} catch (error) {
    res
    .status(error?.status || 500)
    .send({ status: "FAILED", data: { error: error?.message || error } });   
};

}

const fullUpdateOneWorkout = (req,res)=>{
    const {
        body, params: {workoutId}
    } = req;
    if (!workoutId) {
        res
         .status(400)
         .send({
            status: "FAILED",
            data: { error: "Parameter ':workoutId' can not be empty" },
         });
      }
      try {
        const fullyUpdatedOneWorkout = workoutService.fullUpdateOneWorkout(workoutId,body);
        res.send({status: "OK", data: fullyUpdatedOneWorkout })
      } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });  
      }

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
        res
        .status(400)
        .send({
          status: "FAILED",
          data: { error: "Parameter ':workoutId' can not be empty" },
        });
      }
    try {
        const deletedOneWorkout = workoutService.deleteOneWorkout();
        res.status(204).send({status: "OK"})   
    } catch (error) {
        res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });    
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

