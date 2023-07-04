// var checkIfLogin = require('../middleware/checkIfLogin')

var express = require('express');
var router = express.Router();

// const checkIfLogin = function(req, res, next) {
//   res.send('驗證登入')
//   res.next()
// }

/* GET users listing. */
router.get('/',function(req, res, next) {
  res.status(200).json({message:'驗證成功，可使用該頁面'});
});

module.exports = router;
