var express = require('express');
var router = express.Router();
var db = require('../conf/database');

/* GET contactos page. */
router.get('/', function(req, res, next) {
  const query = 'SELECT * FROM contactos'; 

  db.all(query, [], (err, rows) => {
    console.log(rows)
    if (err) {
      return res.status(500).send(err.message);
    }
    res.render('contactos', { data: rows });
  });
});

module.exports = router;