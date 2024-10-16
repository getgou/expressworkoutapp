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
  "name": "Get Ab Buster",
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

