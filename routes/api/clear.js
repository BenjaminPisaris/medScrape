var router = require("express").Router();
var clearController = require("../../controllers/clear");
//clear the DB using the controller
router.get("/", clearController.clearDB);

module.exports = router;
