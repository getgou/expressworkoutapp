
//To be updated!!
const getRecordForWorkout =(workoutId) =>{
    try {
      const record= Record.getRecordForWorkout(workoutId);
      return record;
    } catch (error) {
        throw error;   
    }
}

module.exports = { getRecordForWorkout};