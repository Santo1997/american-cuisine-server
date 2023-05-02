const express = require('express')
var cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;


app.use(cors())

const recipeData =  require('./data/recipies.json');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/recipies', (req, res) => {
  res.send(recipeData);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})