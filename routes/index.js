var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/nodeauth');


// Homepage Blog Posts
router.get('/', function(req, res, next) {
  var dob = req.db;
  var posts = dob.get('posts');
  posts.find({},{},function(err, posts){
  	res.render('index',{
  		"posts": posts
  	});
  });
});

module.exports = router;