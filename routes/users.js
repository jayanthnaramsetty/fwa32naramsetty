var express = require('express');
var router = express.Router();
var digi = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  digi = digi + 1;
  res.send(`User accesses are: ${digi}`);
});

module.exports = router;