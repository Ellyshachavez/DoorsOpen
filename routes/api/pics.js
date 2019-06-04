const router = require("express").Router();
//const peopleController = require("../../controllers/peopleController");
//const db = require("../models");
var cloudinary = require("cloudinary").v2;
const multer = require("multer");
const upload = multer();
require("dotenv").config();
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});
router.post("/", upload.single("photo"), function(req, res) {
  //const name = req.body;
  console.log("got to pics.js file route post", req.body);

  cloudinary.uploader.upload(req.body.image, function(error, result) {
    console.log(result, error);
    // console.log(result.url);
  });
  res.status(200).send({ msg: "hello" });
});
module.exports = router;
