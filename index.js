const express = require('express')
var cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;


app.use(cors())

const recipeData =  require('./data/recipies.json');
const chefData =  require('./data/chefData.json');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/recipies', (req, res) => {
  res.send(recipeData);
})

app.get('/recipies/:id', (req, res) => {
  const id = req.params.id;
  const itms = recipeData?.find((itm) => itm.recipe_id == id);
  res.send(itms);
})

app.get('/chefData', (req, res) => {
  res.send(chefData);
})


app.get('/chefData/:id', (req, res) => {
   const chefId = req.params.id;
  const chefInfo = chefData?.find((chef) => chef.id == parseInt(chefId));
  res.send(chefInfo);
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})