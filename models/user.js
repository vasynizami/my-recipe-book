const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
  {
    username: { type: String, required: true },
    password_digest: { type: String, required: true },
    // recipes: [{ type: Schema.Types.ObjectId, ref: 'recipes' }]
  },
  { timestamps: true }
)

module.exports = mongoose.model('users', User)