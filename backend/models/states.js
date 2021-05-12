var mongoose = require('mongoose');
//getting Schema class from mongoose.Schema
var Schema = mongoose.Schema;
const StateSchema = Schema({
  state: {
    type: String,
    required: true
  }
});


module.exports = mongoose.model("state", StateSchema);