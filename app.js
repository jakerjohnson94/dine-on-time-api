const express = require('express');
const recipeModel = require('./models/Recipe.js');
const mongoose = require('mongoose');
const cors = require('cors');

const port = 3000;

// mongoose.connect('mongodb://localhost/dine-on-time');
mongoose.connect('mongodb://jarijohn:FuckYouBob2018@ds155292.mlab.com:55292/dine-on-time');

const app = express();

app.use(express.json());
app.use(cors());

// Get all recipes
app.get('/recipes', (req, res) => {
  recipeModel.find((err, recipes) => {
    if (err) return console.error(err);


  }).then(recipe=>res.json());
});

// Get recipe by ID
app.get('/recipe/:id', (req, res) => {
  recipeModel.findOne(
    {
      _id: req.params.id,
    },
    (err, recipe) => {
      if (err) return console.error(err);
      else if (recipe === null) {
        res.sendStatus(404);
      } else {
        return res.send(recipe.json());
      }
    }
  );
});
app.listen(port);
