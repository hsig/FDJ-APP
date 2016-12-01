// Load required packages
var mongoose = require('mongoose');

// Define our client schema
var bouleSchema = new mongoose.Schema({
  poid : String,
  num: Number
});

// Export the Mongoose model
module.exports = mongoose.model('Boule', bouleSchema);
