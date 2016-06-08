var express = require('express');
var router = express.Router();
var userModel = require('../db/user');


/**
 * Rendering
 */
router.get('/', function(req, res, next) {
  userModel.findOne({uid: req.cookies.uid})
  .then(function(model)
  {
    console.log(model);
    res.render('summary', {
      question1: model.question1,
      question2: model.question2,
      question3: model.question3
    });
  });
});


module.exports = router;
