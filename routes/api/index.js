var router = require("express").Router();
var fetchRoutes = require("./fetch");
var articleRoutes = require("./article");
var clearRoutes = require("./clear");

router.use("/fetch", fetchRoutes);
router.use("/articles", articleRoutes);
router.use("/clear", clearRoutes);

module.exports = router;
