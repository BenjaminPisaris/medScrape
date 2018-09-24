var mongoose = require('mongoose');

//save a reference
var Schema = mongoose.Schema;
//construct the schema
var ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    }, link: {
        type: String,
        required: true
    }
});
//create a model from the schema
var Article = mongoose.model("Article", ArticleSchema);
//export
module.exports = Article;