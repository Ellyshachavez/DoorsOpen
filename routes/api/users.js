const router = require("express").Router();
const controller = require("../../controllers/controller")
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/join")
  .post(usersController.create)


router.route("/login")
  .post(usersController.findOne);

module.exports = router;
