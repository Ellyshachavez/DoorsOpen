const router = require("express").Router();
const peopleRoutes = require("./people");
const picRoutes = require("./pics");

// People routes

router.use("/people", peopleRoutes);

//trying to get pics uploading...
router.use("/pics", picRoutes);

module.exports = router;
