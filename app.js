const express = require('express')
const recipeModel = require('./models/Recipe.js');
const mongoose = require('mongoose');

const port = 3000

mongoose.connect('mongodb://localhost/dine-on-time');

const app = express()

app.use(express.json())


// Get all recipes
app.get('/recipes', (req, res) => {

    recipeModel.find((err, recipes) => {
        if (err) return console.error(err)

        res.send(recipes)
    })
})

// Get recipe by ID
app.get('/recipe/:id', (req, res) => {
    recipeModel.findOne({
        id: req.params.id
    }, (err, recipe) => {
        if (err) return console.error(err)
        else if (recipe === null) {
            res.sendStatus(404)
        } else {
            res.send(recipe)
        }
    })

})
app.listen(port)