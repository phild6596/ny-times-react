const Article = require("../models/Article");

module.exports = {
    find: (req, res) => {
        console.log("Gathering articles for Mongo");
        Article.find().then(function (doc) {
            res.json(doc);
        }).catch(function (err) {
            res.json(err);
        });
    },

    insert: (req, res) => {
        console.log("Adding article to db");
        Article.create(req.body).then(function(doc) {
            res.json(doc);
        }).catch(function(err) {
            res.json(err);
        })
    },

    delete: (req, res) => {
        console.log("Deleting a saved article from db");
        Article.remove({
            _id: req.params.id
        }).then(function(doc) {
            res.json(doc);
        }).catch(function(err) {
            res.json(err);
        });
    }
};