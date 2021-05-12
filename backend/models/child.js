var mongoose = require('mongoose');
//getting Schema class from mongoose.Schema
var Schema = mongoose.Schema;
const ChildSchema = Schema({
  name: {
    type: String,
    required: true
  },
  sex: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    default: true
  },
  father_name: {
    type: String,
    required: true
  },
  mother_name: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  district: {
    type: String,
    required: true
  },
 
});


module.exports = mongoose.model("child", ChildSchema);