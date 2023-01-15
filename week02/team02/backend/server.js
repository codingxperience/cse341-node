const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./db/connect');
const professionalRoutes = require('./routes/index');

const app = express()
const port = process.env.PORT || 8080;

app.use(bodyParser.json())
app.use((req, res, next) => {
  res.setHeader('Access-control-Allow-Origin', '*');
  next();
})
app.use('/index', professionalRoutes);

mongodb.initDb((err, mongodb) => {
  if(err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
// app.listen(port, () => {
//   console.log(`Listening on port ${port}`)
// })