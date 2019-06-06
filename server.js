const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = process.env.PORT || 3001;

// Static assets
app.use(express.static("./client/build"));
app.use(express.static('./client/public'))

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Configure routes
require("./controllers/controller.js")(app);

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/doorsopen");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

