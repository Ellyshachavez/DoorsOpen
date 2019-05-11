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
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: Number, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    registrations: {
      name: Array,
      phone: Array,
      email: Array
    }
  }
});

const People = mongoose.model("People", peopleSchema);

module.exports = People;
