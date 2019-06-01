const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const peopleSchema = new Schema({
  agent: { type: Boolean, required: true },
  loanOfficer: { type: Boolean, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  company: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
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

const People = mongoose.model("People", peopleSchema);

module.exports = People;
