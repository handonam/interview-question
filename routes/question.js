var express = require('express');
var router = express.Router();
var userModel = require('../db/user');


/**
 * Rendering
 */
router.get('/step1', function(req, res, next) {
  res.render('step1');
});
router.get('/step2', function(req, res, next) {
  res.render('step2');
});
router.get('/step3', function(req, res, next) {
  res.render('step3');
});


/**
 * Posts
 */
router.post('/step1', function(req, res, next) {
  userModel.find({uid: req.cookies.uid})
  .then(function(model) {
    return userModel.update(model, { question1: req.body.about });
  })
  .then(function(model) {
    res.redirect('/question/step2');
  });
});

router.post('/step2', function(req, res, next) {
  userModel.find({uid: req.cookies.uid})
  .then(function(model) {
    return userModel.update(model, { question2: req.body.about });
  })
  .then(function(model) {
    res.redirect('/question/step3');
  });
});

router.post('/step3', function(req, res, next) {
  userModel.find({uid: req.cookies.uid})
  .then(function(model) {
    return userModel.update(model, { question3: req.body.about });
  })
  .then(function(id) {
    res.redirect('/summary');
  });
});

module.exports = router;
