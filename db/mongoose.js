var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/intuit');

module.exports = mongoose;
