const router = require("express").Router();
const peopleRoutes = require("./people");

// People routes
router.use("/peoples", peopleRoutes);

module.exports = router;
