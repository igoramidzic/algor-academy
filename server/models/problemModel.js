var mongoose = require("mongoose");

const Schema = mongoose.Schema;

const problemModel = new Schema({
  title: {
    type: String,
    required: true,
    description: "Must be a string and is required"
  },
  description: {
    type: String,
    required: true,
    description: "Must be a string and is required"
  },
  date_published: {
    type: Date,
    required: false
  },
  word_solution: {
    type: String,
    required: true,
    description: "Must be a string and is required"
  },
  pseudo_code_solution: {
    type: String,
    required: true,
    description: "Must be a string and is required"
  },
  code_solution: {
    type: String,
    required: true,
    description: "Must be a string and is required"
  },
  difficulty: {
    type: Number,
    required: true,
    description: "Must be a number and is required"
  },
  success_rate: {
    type: Number,
    required: false,
    description: "Must be a number"
  }
})

module.exports = mongoose.model('problems', problemModel);