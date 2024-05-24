const mongoose = require("mongoose");
const donateSchema = new mongoose.Schema({
  place: String,
  add: String,
  person: Number,
  date: Date,
  num: Number,
});

const DonateModel = mongoose.model("donate", donateSchema);
module.exports = DonateModel;
