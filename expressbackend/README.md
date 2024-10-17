# Simple express demo

> Express: fast, unopinionated, minimalist web framework for Node.js

This project shows a simple express server serving a single HTML page and using `express.static` to serve static files.

Check out the [express documentation](https://expressjs.com/) for more information.

## Remote repo

> git push origin main:main
To https://github.com/getgou/expressworkoutapp.git
 ! [rejected]        main -> main (non-fast-forward)
error: failed to push some refs to 'https://github.com/getgou/expressworkoutapp.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.

## GET Request

curl -X GET  https://expressworkoutapp-mvsx--3010--134daa3c.local-credentialless.webcontainer.io/app/v1/workouts
    >> Get all list of workou

curl -X GET  https://expressworkoutapp-mvsx--3010--134daa3c.local-credentialless.webcontainer.io/app/v1/workouts/12
    >> Get a workout by ID

## POST Request

 curl -X POST  https://expressworkoutapp-mvsx--3010--134daa3c.local-credentialless.webcontainer.io/app/v1/workouts/
    >> Create a new workout

curl -X POST  https://expressworkoutapp-mvsx--3010--134daa3c.local-credentialless.webcontainer.io/app/v1/workouts/ -H "Content-Type: application/json" -d '{
  "name": "Get Ab",
  "mode": "AMRAP 20",
  "equipment": [
    "rack",
    "barbell",
    "abmat"
  ],
  "exercises": [
    "15 toes to bars",
    "10 thrusters",
    "30 abmat sit-ups"
  ],
  "trainerTips": [
    "Split your toes to bars into two sets maximum",
    "Go unbroken on the thrusters",
    "Take the abmat sit-ups as a chance to normalize your breath"
  ]
}'


## DELETE Request

 curl -X DELETE  https://expressworkoutapp-mvsx--3010--134daa3c.local-credentialless.webcontainer.io/app/v1/workouts/12
    >> A workout deleted

## PUT Request

 curl -X PUT  https://expressworkoutapp-mvsx--3010--134daa3c.local-credentialless.webcontainer.io/app/v1/workouts/12
    >> Update an existing workout

curl -X PUT  https://expressworkoutapp-mvsx--3010--134daa3c.local-credentialless.webcontainer.io/app/v1/workouts/15c4e920-5972-452e-a850-360013b00a3a -H "Content-Type: application/json" -d '{
  "name": "Getgou Ab",
  "mode": "AMRAP 20",
  "equipment": [
    "rack",
    "barbell",
    "abmat"
  ],
  "exercises": [
    "15 toes to bars",
    "10 thrusters",
    "30 abmat sit-ups"
  ],
  "trainerTips": [
    "Split your toes to bars into two sets maximum",
    "Go unbroken on the thrusters",
    "Take the abmat sit-ups as a chance to normalize your breath"
  ]
}'

## Extra Information
As you can see, logical nesting makes sense when you have resources that can be tied together. Theoretically you can nest it how deep you want, but the rule of thumb here is to go three levels deep at a maximum. If you want to nest deeper than that, you could do a little tweak inside your database records

Consider the following inside the database:

{
  "workouts": [ ...
  ],
  "members": [ ...
  ],
  "records": [ ... {
      "id": "ad75d475-ac57-44f4-a02a-8f6def58ff56",
      "workout": "4a3d9aaa-608c-49a7-a004-66305ad4ab50",
      "record": "160 reps",
      "memberId": "11817fb1-03a1-4b4a-8d27-854ac893cf41",
      "member": "/members/:memberId"
    },
  ]
}

As you can see, we've added the two properties "memberId" and "member" to our records inside the database. This has the huge advantage that we don't have to nest deeper our existing endpoint.

The frontend just needs to call GET /api/v1/workouts/:workoutId/records and receives automatically all records that are connected with this workout.

On top of that it gets the member id and the endpoint to fetch information about that member. So, we avoided the deeper nesting of our endpoint.
