var checkIfLogin = require('../middleware/checkIfLogin')

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', checkIfLogin,function(req, res, next) {
  res.status(200).json({message:'驗證成功，可使用該頁面'});
});

module.exports = router;
