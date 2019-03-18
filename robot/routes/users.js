var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/text', function(req, res, next) {
  res.render('error');
});

module.exports = router;
