// models/User.js

const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  options: {
    type: Array,
    required:true,
    A: {
        type: String,
        required: true
    },
    B: {
        type: String,
        required: true
    },
    C: {
        type: String,
        required: true
    },
    D: {
        type: String,
        required: true
    }
  },
  answer: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Questions', questionSchema);
