const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  _id: {
    required: true,
    type: Number
  },
  recipeTitle: String,
  recipeSubtitle: String,
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
  totalPrepTime: {
    type: Number,
    required: true,
  },
  totalCookTime: {
    type: Number,
    required: true,
  },
  ingredients: [{
    ingredientId: {
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
    img: {
      type: String,
      required: false
    }
  }],
  steps: [{
    stepId: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    alertTime: {
      type: Number,
      required: true,
    },
    activeTime: {
      type: Number,
      required: true,
    },
    instructions: {
      type: String,
      required: true,
    },
    optionalImg: {
      type: Buffer,
      required: true,
    },
    isPrepStep: {
      type: Boolean,
      required: false,
    },
    ingredientsRequired: [{
      ingredientId: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      img: {
        type: String,
        required: false,
      }
    }],
  }],
});
module.exports = mongoose.model('Recipe', recipeSchema);