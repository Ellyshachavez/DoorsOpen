const mongoose = require("mongoose");
const db = require("../models");

// This file empties the peoples collection and inserts the peoples below
console.log("running seedDB file...");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/peoplelist");

const peopleSeed = [
  {
    agent: true,
    loanOfficer: false,
    firstName: "Darla",
    lastName: "Sherman",
    company: "Burger Professionals",
    email: "darla.sherman@burgerre.com",
    password: "Whyareyousleeping?",
    profilePic: "String",
    events: {
      address: "142 Wallaby Way",
      city: "Sydney",
      state: "Australia",
      zip: 00000,
      date: "aug 2 2019",
      time: "2:30 to 5:30",
      registrations: {
        name: ["Leah", "Ellysha"],
        phone: ["916-822-7426", "916-967-2012"],
        email: ["Leah@henry.com", "Ellysha@chavez.com"]
      }
    }
  }
];

db.People.remove({})
  .then(() => db.People.collection.insertMany(peopleSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

//date: new Date(Date.now())
