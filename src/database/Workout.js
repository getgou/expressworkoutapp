const DB= require('./db.json')

const getAllWorkouts = ()=>{
    return DB.workouts;
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
