const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Defining methods for the booksController
module.exports = {
  findOne: function(req, res) {
    const {email, password } = req.body;
    console.log(req.body);
    db.User
      .findOne({email})
      .then(dbModel => {
        console.log(dbModel);
        if(!dbModel) {
          return res.status(404).json({
            error: "email and password not matching"
          });
        }

        bcrypt.compare(password, dbModel.password, function(err, same) {
          if (err) {
            return res.status(500).json({
              error: "Something went wrong"
            })
          }
          if (!same) {
            return res.status(404).json({
              error: "password email not matching"
            });
          }
        

          const { firstName,selectedOption, profilePic, email, _id: id, registrations } = dbModel;

          const token = jwt.sign({email, id, firstName, selectedOption, profilePic, registrations}, 'my-website-secrete');
          return res.json({
            id,
            firstName,
            selectedOption,
            profilePic,
            email,
            registrations,
            token
          })
        })
      })
      .catch(err => res.status(422).json(err));
  },


  create: function(req, res) {
    const password = bcrypt.hashSync(req.body.password, 10);
    const {email, firstName, lastName, profilePic, company, selectedOption} = req.body;
    db.User
      .create({ firstName, lastName, company, selectedOption, profilePic, email, password})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }


  
};
