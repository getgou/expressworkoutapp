
const express = require('express');
const workoutController = require('../../controllers/workoutController');
const recordController = require('../../controllers/recordController');

const workoutRouter = express.Router();


workoutRouter.get('/', workoutController.getAllWorkouts);

workoutRouter.get('/:workoutId/records', recordController.getRecordForWorkout);

workoutRouter.get('/:workoutId', workoutController.getOneWorkout)

workoutRouter.post('/', workoutController.createNewWorkout);

workoutRouter.put('/:workoutId', workoutController.fullUpdateOneWorkout);

workoutRouter.patch('/:workoutId', workoutController.partialUpdateOneWorkout);

workoutRouter.delete('/:workoutId', workoutController.deleteOneWorkout);

module.exports = workoutRouter