var router = require("express").Router();
var articleControl = require("../../controllers/article");

router.get("/", articleControl.findAll);
router.delete("/:id", articleControl.delete);
router.put("/:id", articleControl.update);

module.exports = router;
