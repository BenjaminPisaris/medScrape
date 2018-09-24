//link dependencies
var router = require("express").Router();
var fetchController = require("../../controllers/fetch");
//routing
router.get("/", fetchController.scrapeHeadlines);

module.exports = router;