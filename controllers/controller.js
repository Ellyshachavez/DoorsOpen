// Imports
const db = require("../models");
var settings = require('../config/settings');
var jwt = require('jsonwebtoken');
var nodemailer = require('nodemailer');
var pageUrl = "/passwordreset/";

// Exports
module.exports = (app) => {
  // Routes

  // Database Routes

  // Find User by id
  app.get("/user/:id", function (req, res) {
    db.User
      .findById(req.params.id)
      .populate("leads")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  });

  //Register User - Saves User to db
  app.post('/join', function (req, res) {
    console.log(`req body `, req.body);
    if (!req.body.email || !req.body.password) {
      res.json({ success: false, msg: 'Please enter email and password.' });
    } else {
      db.User
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => {
          if (err) {
            return res.json({ success: false, msg: 'Email already exists. Please sign in or use another email.' });
          }
          res.json({ success: true, msg: 'Successful created new user.' });
        });
    }
  });

  //Login as a User
  app.post('/login', function (req, res) {
    db.User.findOne({
      email: req.body.email
    }, function (err, user) {
      if (err) throw err;

      if (!user) {
        res.status(401).send({ success: false, msg: 'Authentication failed. User not found.' });
      } else {
        // check if password matches
        user.comparePassword(req.body.password, function (err, isMatch) {
          if (isMatch && !err) {
            // if user is found and password is right create a token
            var token = jwt.sign(user.toJSON(), settings.secret);
            // return the information including token as JSON
            res.json({ success: true, token: 'JWT ' + token, _id: user._id });
          } else {
            res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
          }
        });
      }
    });
  });

  // Update user info
  app.put("/user/:id", function (req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  });

  //Password reset info
  app.post("/sendPassEmail", function (req, res) {
    console.log("sendPassRout", req.body.email)
    db.User.findOne({"email": req.body.email})
      .then(dbUser => {
        console.log("User from db:  ", dbUser)
        if (dbUser) {
          var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'TheDoorsOpen@gmail.com',
              pass: 'May14may14..'
            }
          });
          //get host from request
          var hostname = "https://"+req.get('host');

          if(app.get('env')==='development'){
             hostname = 'http://localhost:3000';
          }
           
          console.log(app.get('env'));
          var url = hostname + pageUrl + req.body.email;
         
          console.log(url);
          var mailOptions = {
            from: 'TheDoorsOpen@gmail.com',
            to: req.body.email,
            subject: 'PASSWORD RESET',
            html: "We received a request to reset the password for your account associated with this e-mail address. If you made this request, please <a href='" + url + "'><strong>Click Here</strong></a><br/>If you did not request to have your password reset you can safely ignore this email.<br/><br/>Regards,<br/><br/>The Door's Open"
          };
          transporter.sendMail(mailOptions, function (error, info) {
            console.log('SEND TO EMAIL');
            if (error) {
              console.log('WHY IS THERE AN ERROR', error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
          res.json({
            "Success": "Email Sent Successfully."
          })
        } else {
          res.json({
            message: 'This email is already taken.'
          });
        }
      }).catch(function (err) {
        console.log(err);
      });
  });

  app.post('/passwordreset/savePass', function (req, res) {
    console.log(req.body);
    var email = req.body.email
    var salt = bcrypt.genSaltSync(10);
    var pass = bcrypt.hashSync(req.body.password, salt);
    db.User
      .update({ 'email': email }, { $set: { 'password': pass } }, function (err, results) {
        if (err) {
          console.log("err update", err)
          res.status(401).send({ success: false, msg: 'Can not save password.' });
        }
        else {
          res.status(200).send({ success: true, msg: 'Password changed successfully.' });
        }
      })
  });

 
} // End of Module Export