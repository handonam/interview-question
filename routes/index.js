var express = require('express');
var router = express.Router();

/**
 * Start of workflow.  Clear out cookies as well.
 */
router.get('/', function(req, res, next) {
  res.clearCookie('uid');
  res.render('index');
});

module.exports = router;
