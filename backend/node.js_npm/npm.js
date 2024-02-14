// first npm package installation npm i
//use

const express = require('express');

const app = express();
app.get("/", function (req, res) {
    res.send("hello haye baaye baaye");
});
app.get("/profile", function (req, res) {
    res.send("hello from profile");
});
app.listen(3000);