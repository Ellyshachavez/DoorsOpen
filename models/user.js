const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String},
  lastName: { type: String},
  company: { type: String},
  selectedOption: { type: String},
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  profilePic: String,
  events: {
    address: String,
    city: String,
    state: String,
    zip: String,
    date: String,
    time: String,
    registrations: {
      name: Array,
      phone: Array,
      email: Array
    }
  }
});


const User = mongoose.model("User", userSchema);

module.exports = User;