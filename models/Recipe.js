const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
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
  ingredients: {
    type: [ {
      id: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    } ],
    required: true,
  },
  steps: {
    type: [ {
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
      ingredientsRequired: {
        type: [ {
          id: {
            type: Number,
            required: true,
          },
          name: {
            type: String,
            required: true,
          },
          quantity: {
            type: Number,
            required: true,
          },
        } ],
        required: true,
      },
    } ],
    required: true,
  },
});

module.exports = mongoose.model( 'Recipe', recipeSchema );
