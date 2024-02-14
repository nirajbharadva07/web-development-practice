var express = require('express');
var router = express.Router();
const userModel = require("./users");



// router.get("/create", async function(req, res){
//   const createduser = await userModel.create({
//     username: "niraj",
//     name: "niraj",
//     age: 20
//   });
//   res.send(createduser);
// });

// router.get("/user", async function (req, res){
//   let user = await userModel.find();
//   res.send(user);
// })

// router.get("/user", async function (req, res){
//   let user = await userModel.findOne({username: "niraj"});
//   res.send(user);
// })

// router.get("/delet", async function (req, res){
//   let deletuser = await userModel.findOneAndDelete({
//     username: "niraj"
//   });
//   res.send(deletuser);
// })
                                

                                 //session .....

// router.get("/", function (req, res) {
//   req.session.ban = true;
//   res.render("index");
// });

// router.get("/checkban", function (req, res) {

//   if (req.session.ban === true) {
//     res.send("you are banned");
//   }
//   else {
//     res.send("not banned");
//   }
//     });

//     router.get("/removeban", function (req, res) {
//       req.session.destroy(function(err){
//         if (err) throw err;
//         res.send("ban removed");
//       })
//     });



                       //cookie....

router.get("/", function (req, res) {
  res.cookie("age", 25);
  res.render("index");
});

router.get("/read", function (req, res) {
  console.log(req.cookies.age);
  res.send("check");
});

router.get("/delete", function (req, res) {
  res.clearcookie("age");
  res.send("clear hogyi");
});


module.exports = router;
