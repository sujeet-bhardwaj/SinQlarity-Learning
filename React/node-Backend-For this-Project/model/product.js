const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ProductSchema = new Schema({
  product_name: String,
  image: String,
  price: Number, 
  description: String
});


module.exports = mongoose.model('Product', ProductSchema);
