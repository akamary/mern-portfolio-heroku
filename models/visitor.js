const mongoose = require("mongoose");


const visitorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  count: Number,
  firstUpdateTime: String,
  firstUpdateDate: String,
  lastUpdateTime: String,
  lastUpdateDate: String,
  country: String,
  region: String,
  timezone: String,
  city: String,
  
});





const visitor = mongoose.model("visitor", visitorSchema);
module.exports = visitor;