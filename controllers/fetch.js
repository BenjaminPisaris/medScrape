// Controller for our scraper
// ============================
var db = require("../models");
var getPosts = require("../scripts/scrape");


module.exports = {
  scrapeArticle: function(req, res) {
    return getPosts()
      .then(function(articles) {
        // then insert articles into the db
        return db.Article.create(articles);
      })
      .then(function(dbArticle) {
        if (dbArticle.length === 0) {
          res.json({
            message: "No new articles"
          });
        }
        else {
          // Otherwise send back a count of how many new articles we got
          res.json({
            message: "Added " + dbArticle.length + " new articles!"
          });
        }
      })
      .catch(function(err) {
        
        res.json({
          message: "Scrape finished"
        });
      });
  }
};
