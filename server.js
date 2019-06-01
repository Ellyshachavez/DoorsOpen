const express = require("express");
const mongoose = require("mongoose");

//const formidable = require("express-formidable");

//const multer = require("multer");
// var upload = multer({ dest: "C:/desktop" });

const routes = require("./routes");
const app = express();

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//app.use(formidable());
//app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/People");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
