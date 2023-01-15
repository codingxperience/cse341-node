const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) =>{
//   res.send('Shani Love')
// })
app.use('/', require('./routes'))

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})