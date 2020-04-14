const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Recipe = new Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
    course: { type: String, required: false },
    cuisine: { type: String, required: false },
    difficulty: { type: String, required: false },
    prep_time: { type: String, required: false },
    cook_time: { type: String, required: false },
    serves: {type: String, required: true},
    ingredients: { type: Array, required: true },
    instructions: { type: Array, required: true }
  },
  { timestamps: true },
)

module.exports = mongoose.model('recipes', Recipe)