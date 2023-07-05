var checkIfLogin = require('../middleware/checkIfLogin')

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/',checkIfLogin ,function(req, res, next) {
  res.status(200).json({
    message:'登入成功'
  });
});
router.get('/login' ,function(req, res, next) {
  const {email, password} = req.query;
  const data = {
    email,
    password
  }
  res.status(200).json({
    message:'登入成功',
    data
  });
});

module.exports = router;
