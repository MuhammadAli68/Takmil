const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    town:String,
    tehsil:String,
    district:String,
    state:String,
    address:String,
    latitude:Number,
    longitude:Number
});
module.exports = Address = mongoose.model('Address', addressSchema);