var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hola mundo', fullname:'Jose Alexander Sanchez Martin', dni:'30.869.947', section:'2'});
});

module.exports = router;
