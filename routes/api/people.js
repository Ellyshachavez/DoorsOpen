const router = require("express").Router();
const peopleController = require("../../controllers/peopleController");

//we want to findone people for profile page,
//find all events within one people for profile page,
//and find registrations per each event,
//create new people to sign up

// Matches with "/api/people"
//used to create new profile
router
  .route("/")
  .get(peopleController.findAll)
  .post(peopleController.create);

// Matches with "/api/people/:id"
//this will be for getting individual profile
//which will also grab the events within each people object
//also used to add events
router
  .route("/:id")
  .get(peopleController.findById)
  .put(peopleController.update)
  .delete(peopleController.remove);

module.exports = router;
