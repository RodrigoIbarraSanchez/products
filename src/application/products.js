var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ProductsSchema   = new Schema({
    name: String,
    description: String,
    price: Number
});

module.exports = mongoose.model('Product', ProductsSchema);