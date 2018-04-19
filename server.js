const express = require("express");
const mongoose = require("mongoose");
const bluebird = require("bluebird");
const bodyParser = require("body-parser");
const path = require("path");

const PORT = process.env.PORT || 3001;
mongoose.Promise = bluebird;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
} else {
    app.use(express.static(__dirname + "/client/public"));
}

const articleController = require("./server/controllers/article-controller.js");
const router = new express.Router();
router.get("/api/saved", articleController.find);
router.post("/api/saved", articleController.insert);
router.delete("/api/saved/:id", articleController.delete);
router.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build, index.html"));
});

app.use(router);

const db = process.env.MONGODB_URI || "mongodb://localhost/ny-times-react";
mongoose.connect(db, (err) => {
    if(err) {
        console.log("Mongo db error: ", err);
    } else {
        console.log("Mongo db is now connected!");
    }
});


app.listen(PORT, () => {
    console.log(`🌎 ==> Server now listening on port ${PORT}!`);
});