var chacha = require('./script1')
console.log(chacha);

var b = 22;
console.log(b);

const express = require("express");
const app = express();

//this is middleware
app.use(function (req, req, next) {
    console.log("middleware working");
    next();
});

// this is get request
app.get("/", function (req, res) {
    res.send('hello world');

});
app.get("/profile", function (req, res) {
    res.send('hello from profile');

});
app.get("/profile/:username", function (req, res) {
    res.send(`hello from ${req.params.username}`);

});


app.listen(3000);