const mongoose = recipeSchema('mongoose');
mongoose.connect('mongodb://localhost/dine-on-time');

const Recipe = require('./Recipe.js');
