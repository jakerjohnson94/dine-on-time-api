const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  id: {
    required: true,
    type: Number
  },
  qrcode: {
    type: Buffer,
  },
  image: {
    type: Buffer,
  },
  pdf: {
    type: Buffer,
  },
  description: {
    type: String,
    required: true,
  },
  prepInstructions: {
    type: String,
  },
  totalPrepTime: {
    type: Number,
    required: true,
  },
  totalCookTime: {
    type: Number,
    required: true,
  },
  totalTimeForRecipe: {
    type: Number,
    required: true,
  },
  ingredients: [{
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
  }],
  steps: [{
    timeRequired: {
      type: Number,
      required: true,
    },
    instructions: {
      type: Number,
      required: true,
    },
    optionalImg: {
      type: Buffer,
      required: true,
    },
    ingredientsRequired: [{
      id: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      quantity: {
        type: String,
        required: true,
      },
    }],
  }],
});
module.exports = mongoose.model('Recipe', recipeSchema);