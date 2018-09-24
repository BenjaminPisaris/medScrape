//link dependencies
var router = require("express").Router();
var fetchController = require("../../controllers/fetch");
//routing
router.get("/", fetchController.scrapeArticle);

module.exports = router;