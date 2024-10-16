
const express = require('express');
const workoutController = require('./../../controllers/workoutController');

const workoutRouter = express.Router();


workoutRouter.get('/', workoutController.getAllWorkouts);

workoutRouter.get('/:workoutId', workoutController.getOneWorkout);

workoutRouter.post('/', workoutController.createNewWorkout);

workoutRouter.put('/:workoutId', workoutController.fullUpdateOneWorkout);

workoutRouter.patch('/:workoutId', workoutController.partialUpdateOneWorkout);

workoutRouter.delete('/:workoutId', workoutController.deleteOneWorkout);

module.exports = workoutRouter