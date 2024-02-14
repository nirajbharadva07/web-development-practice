var express = require('express');
var router = express.Router();

const userModel = require("./users");


/* GET home page. */
// router.get('/', function(req, res) {
//   res.render('index');
// });


// router.get('/failed', function(req, res) {
//   req.flash("age", 18);
//   res.send("ban gaya");
// });

// router.get('/checkkaro', function(req, res) {
//   console.log(req.flash("age"));
//   res.send("check karo backend ke terminal pe");
// });

router.get("/create", async function(req, res){
  let userdata = await userModel.create ({
    username: "harshiiii",
    nickname: "jdsjukof",
    description: "i am a guy of 48 and i like javascript",
    categories: ['fashion', 'buty', 'brain']

  });
  res.send(userdata);
});

// router.get("/find", async function(req, res){
//   var regex = new RegExp("^Harsh$",'i');
//   let user = await userModel.findOne({ username: regex });
//   res.send(user);
// });

// router.get("/find", async function(req, res){
//   let user = await userModel.find({categories: {$all: ['fashion']} });
//   res.send(user);
// });

// router.get("/find", async function(req, res){
//   var date1 = new Date('2023-10-02');
//   var date1 = new Date('2023-10-03');
//   let user = await userModel.find({ datecreated: {$gte:date1, $lte:date2 } });
//   res.send(user);
// });


router.get("/find", async function(req, res){
  let user = await userModel.find({ categories: { $exists: true } });
  res.send(user);
});

module.exports = router;
