const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Ingredient = require('./Ingredient.js');

const stepSchema = new Schema({
  timeRequired: Number,
  instructions: Number,
  optionalImg: Buffer,
  ingredientsRequired: [ Ingredient ],
});

module.exports = mongoose.model( 'Step', stepSchema );
