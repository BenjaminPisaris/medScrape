var router = require("express").Router();

var articleRoutes = require("./article");
var clearRoutes = require("./clear");

router.use("/articles", articleRoutes);
router.use("/clear", clearRoutes);

module.exports = router;
