var checkIfLogin = require('../middleware/checkIfLogin')

var express = require('express');
var router = express.Router();
const generateJWT = (user, statuscode, res) => {
  const token = jwt.sign({id: user.id}, process.env.JWT_SECREAT, {
    expirseIn: process.env.JWT_EXPIRSEDAY
  });
};

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
    password,
    env:{
      secreat: process.env.JWT_SECREAT,
      expirsday: process.env.JWT_EXPIRSEDAY
    }
  }
  res.status(200).json({
    message:'登入成功',
    data
  });
});

module.exports = router;
