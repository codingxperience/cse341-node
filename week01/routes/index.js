const routes = require('express').Router();

routes.get('/', (req, res) =>{
  res.send('Shani Love')
})

module.exports = routes;