var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/assignment')
 var stores = new mongoose.Schema ({
    Store:{type:Number},
    Type:{type:String},
    Size:{type:Number}
 },{collection:'storesData'});


 module.exports = mongoose.model('stores',stores);