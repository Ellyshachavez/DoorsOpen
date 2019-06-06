const router = require("express").Router();
const registrationController = require("../../controllers/registrationController");
const isAuthenticated = require("../../controllers/auth");

// Matches with "/api/books"
router.route("/")
  .get(isAuthenticated, regisstrationController.findAll)
  .post(registrationController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(registrationController.findById)
  .put(registrationController.update)
  .delete(registrationController.remove);

module.exports = router;

