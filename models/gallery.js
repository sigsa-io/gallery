var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  // object defining schema
	restaurant_name: {type: String, required: true},
  restaurant_id: {type: String, required: true},
  // url: {
  //   url1: String,
  //   urln: String,
  // },
});

module.exports = mongoose.model('Gallery', schema);