
const express = require('express');
const apicache = require('apicache')

const workoutController = require('../../controllers/workoutController');
const recordController = require('../../controllers/recordController');


const workoutRouter = express.Router();


const cache = apicache.middleware;

/**
 * @openapi
 * /api/v1/workouts:
 *   get:
 *     tags:
 *       - Workouts
 *     parameters:
 *       - in: query
 *         name: mode
 *         schema:
 *           type: string
 *         description: The mode of a workout
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/Workout"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */
workoutRouter.get('/', cache("2 minutes"), workoutController.getAllWorkouts);

workoutRouter.get('/:workoutId', workoutController.getOneWorkout)

workoutRouter.get('/:workoutId/records', recordController.getRecordForWorkout);

workoutRouter.post('/', workoutController.createNewWorkout);

workoutRouter.put('/:workoutId', workoutController.fullUpdateOneWorkout);

workoutRouter.patch('/:workoutId', workoutController.partialUpdateOneWorkout);

workoutRouter.delete('/:workoutId', workoutController.deleteOneWorkout);

module.exports = workoutRouter