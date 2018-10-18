var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/entrada', function(req, res, next) {
  res.render('entrada', { titulo: 'ENTRADAS' });
});

module.exports = router;