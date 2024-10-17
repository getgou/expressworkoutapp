const express = require('express');
//const { resolve } = require('path');
const bodyParser = require('body-parser')
const cors = require('cors')
const apicache = require('apicache')

const v1Router= require('./v1/routes/workoutRoutes')

const app = express();
const port = 3010;
const cache = apicache.middleware;

//app.use(express.static('static'));
app.use(cache('2 minutes')); // setting 2 minutes catching for all apis

app.use(cors())

app.use(bodyParser.json())
app.use('/app/v1/workouts', v1Router)

/*
app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});
*/

app.get('/', (req, res)=>{
    res.send({
      message: " Hello React this is Express API running  from backend"
    })
});

app.listen(port, () => {
  console.log(`Example express app modified listening at http://localhost:${port}`);
});
