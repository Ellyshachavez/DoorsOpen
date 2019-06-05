const router = require("express").Router();
const booksController = require("../../controllers/booksController");
const isAuthenticated = require("../../controllers/auth");

// Matches with "/api/books"
router.route("/")
  .get(isAuthenticated, booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;

