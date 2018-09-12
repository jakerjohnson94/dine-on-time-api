const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
  id: Number,
  name: String,
  quantity: Number,
});

module.exports = ingredientSchema; // mongoose.model( 'Ingredient', ingredientSchema );
