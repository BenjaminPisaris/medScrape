var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

//scraping tools
var scrape = require("medium-scraper");
var axios = require("axios");

var app = express();

//models
var db = require("./models/Article");
var routes = require("./routes");
var PORT = 3000;

app.use(express.static("public"));
//Set the engine to handlebars
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
//Configure middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//use morgan to log requests

app.use(logger("dev"));
app.use(routes);
//connect to MongoDB
mongoose.connect("mongodb://localhost/dbArticles")


// Listen on the port
app.listen(PORT, function() {
    console.log("Listening on port: " + PORT);
  });

