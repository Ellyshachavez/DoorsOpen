const router = require("express").Router();
const peopleRoutes = require("./people");

// Book routes
router.use("/people", peopleRoutes);

module.exports = router;
