const mongoose = require("mongoose");

const organizationSchema = new mongoose.Schema({
 name:String
});
module.exports = Organization = mongoose.model('Organization', organizationSchema);