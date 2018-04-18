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


app.listen(PORT, () => {
    console.log(`🌎 ==> Server now listening on port ${PORT}!`);
});