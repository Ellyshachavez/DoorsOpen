const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/doorsopen"
);

const leadSeed = [
  {
    firstName: "Test",
    lastName: "Name",
    email: "test@gmail.com",
    tite: "Loan Officer",
    company: "Realty One",
    password: "pass1234",
  },
  
];

db.Leads
  .remove({})
  .then(() => db.Leads.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
