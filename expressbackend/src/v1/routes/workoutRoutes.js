
const express = require('express');
const apicache = require('apicache')

const workoutController = require('../../controllers/workoutController');
const recordController = require('../../controllers/recordController');


const workoutRouter = express.Router();


const cache = apicache.middleware;

workoutRouter.get('/', cache("2 minutes"), workoutController.getAllWorkouts);

workoutRouter.get('/:workoutId', workoutController.getOneWorkout)

workoutRouter.get('/:workoutId/records', recordController.getRecordForWorkout);

workoutRouter.post('/', workoutController.createNewWorkout);

workoutRouter.put('/:workoutId', workoutController.fullUpdateOneWorkout);

workoutRouter.patch('/:workoutId', workoutController.partialUpdateOneWorkout);

workoutRouter.delete('/:workoutId', workoutController.deleteOneWorkout);

module.exports = workoutRouter