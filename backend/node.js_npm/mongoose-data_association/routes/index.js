var express = require('express');
var router = express.Router();
const userModel = require("./users");
const postModel = require("./post");

/* GET home page. */
router.get('/', function(req, res,next) {
  res.render('index', { title: 'Express' });
});

router.get('/createuser', async function(req, res,next) {
  let createduser = await userModel.create({
    username: "niraj",
  password: "niraj",
  posts: [],
  
  email: "niraj@gmail.com",
  fullName: "niraj hiteshbhai bharadva",
  });
  res.send(createduser);
});

router.get('/createpost', async function(req, res,next) {
  let createdpost = await postModel.create({
    postText: "hello everone",
    // user: "65cc5fa7f274e2cdc74d583b"
    
  });
  // let user = await userModel.findOne({_id:"65cc5fa7f274e2cdc74d583b"});
  // user.posts.push(createdpost._id);
  // await user.save();
  // res.send("done");
});
module.exports = router;
