var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/assignment')
 var retail = new mongoose.Schema ({
    _id: Object,
    Store: Number,
    Dept: Number,
    Date: String,
    Weekly_Sales:String,
    IsHoliday: Number,
    Temperature: Number,
    Fuel_Price: Number,
    MarkDown1: Number,
    MarkDown2: Number,
    MarkDown3: Number,
    MarkDown4: Number,
    MarkDown5: Number,
    CPI: Number,
    Unemployment: Number,
    Type: Number,
    Size: Number
 },{collection:'retail'});


 module.exports = mongoose.model('retail',retail);