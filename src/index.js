const express = require('express');
//const { resolve } = require('path');

const v1Router= require('./v1/routes')

const app = express();
const port = 3010;

//app.use(express.static('static'));

app.use('/app/v1', v1Router)

/*
app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});
*/

app.listen(port, () => {
  console.log(`Example express app modified listening at http://localhost:${port}`);
});
