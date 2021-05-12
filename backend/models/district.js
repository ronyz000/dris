var mongoose = require('mongoose');
//getting Schema class from mongoose.Schema
var Schema = mongoose.Schema;
const DistSchema = Schema({
  state: {
    type: String,
    required: true
  },
  district: {
    type: String,
    required: true
  }
});


module.exports = mongoose.model("district", DistSchema);