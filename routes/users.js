var express = require('express');
var router = express.Router();
var userModel = require('../db/user');


/**
 * Rendering
 */
router.get('/:name', function(req, res, next) {
  userModel.find({name: req.params.name})
  .then(function(model) {
    res.send(model);
  });
});


/**
 * Post
 */
router.post('/', function(req, res, next) {
  var randomNumber = Math.random().toString();
  randomNumber = randomNumber.substring(2, randomNumber.length);

  var user = new userModel({ uid: randomNumber, name: req.body.name });

  user.save()
  .then(function(result) {
    res.cookie('uid', randomNumber, { maxAge: 900000 });
    res.redirect('/question/step1');
  });
});


module.exports = router;
