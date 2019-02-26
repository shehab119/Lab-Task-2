var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});



router.post('/', function(req, res, next) {

var stdid = req.body.stdid;
var stdname = req.body.stdname;

console.log(stdid + " " + stdname);
console.log("Login Sucessfully ");

  res.render('index');
});

router.get('/new', function(req, res, next) {
  res.render('singup');
});



router.post('/new', function(req, res, next) {

var nid = req.body.nid;
var nname = req.body.nname;
var nnumber = req.body.nnumber;
var nrel = req.body.nrel;

console.log(nid + " " + nname + " " + nnumber + " " + nrel);
console.log("Sing up Sucessfully ");

  res.render('singup');
});



module.exports = router;
