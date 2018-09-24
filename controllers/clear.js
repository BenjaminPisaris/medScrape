var db = require("../models");

module.exports = {
  clearDB: function(req, res) {
    //remove all Articles from db
    db.Article.remove({})
      .then(function() {
        res.json({ ok: true });
      });
  }
};
