var mongoose = require('mongoose');

var batchSchema = mongoose.Schema({
  nid: {
    type: String,
    unique: true
  },
  nname: {
    type: String
  }
    
}),
 nnumber: {
    type: String,
    unique: true
  };



module.exports = mongoose.model('singup', batchSchema);
