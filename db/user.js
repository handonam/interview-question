'use strict';

var mongoose = require('./mongoose');
var userSchema = mongoose.Schema({
  uid: Number,
  name: String,
  created_at: { type: Date, default: Date.now },
  question1: String,
  question2: String,
  question3: String
});

module.exports = mongoose.model('User', userSchema);
