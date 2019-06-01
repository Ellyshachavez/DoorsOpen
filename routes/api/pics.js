const router = require("express").Router();
//const peopleController = require("../../controllers/peopleController");
//const db = require("../models");
var cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dzbqct4oi",
  api_key: "747669419869616",
  api_secret: "leEO0aWazZEINZDjDe32g1S2OyE"
});

router.route("/").post(function(req, res) {
  //const name = req.body;
  console.log("got to pics.js file route post");

  console.log(req.body);
  cloudinary.uploader.upload(req.body.image, function(error, result) {
    console.log(result, error);
    console.log(result.url);
  });
});
module.exports = router;
