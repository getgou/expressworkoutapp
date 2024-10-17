const express = require('express');
//const { resolve } = require('path');
const bodyParser = require('body-parser')
const v1Router= require('./v1/routes/workoutRoutes')

const app = express();
const port = 3010;

//app.use(express.static('static'));

app.use(bodyParser.json())
app.use('/app/v1/workouts', v1Router)

/*
app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});
*/

app.listen(port, () => {
  console.log(`Example express app modified listening at http://localhost:${port}`);
});
