// Controller for our Article
var db = require("../models");

module.exports = {
  // Find all Articles, sort them by date, send them back to the user
  findAll: function(req, res) {
    db.Article
    //find req.query
      .find(req.query)
      //sort by -1 so newest articles appear first
      .sort({ date: -1 })
      //after sorting res the articles
      .then(function(dbArticle) {
        res.json(dbArticle);
      });
  },
  // Delete the article
  delete: function(req, res) {
    //remove the specified article by selecting its req.params id
    db.Article.remove({ _id: req.params.id }).then(function(dbArticle) {
      res.json(dbArticle);
    });
  },
  // Update the article
  update: function(req, res) {
    db.Article.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true }).then(function(dbArticle) {
      res.json(dbArticle);
    });
  }
};
