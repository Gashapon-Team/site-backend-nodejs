var checkIfLogin = require('../middleware/checkIfLogin')

var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');

const generateJWT = ({id}) => {
  const {JWT_SECREAT, JWT_EXPIRSEDAY} = process.env;
  const token = jwt.sign({id}, JWT_SECREAT, {
    expiresIn: JWT_EXPIRSEDAY
  });
  return token
};

/* GET users listing. */
router.post('/',checkIfLogin ,function(req, res, next) {
  res.status(200).json({
    message:'驗證成功，可使用會員功能'
  });
});
router.post('/login' ,function(req, res, next) {
  const {email} = req.query;
  const token = generateJWT({
    id: email
  })
  let date = new Date().toJSON();
  const data = {
    message: 'login sucess',
    user: {
      id: '1',
      email,
      email_verified_at: null,
      created_at: date,
      updated_at: date
    },
    token
  }
  res.status(200).json({
    message:'登入成功',
    data
  });
});
router.post('/register', function(req, res, next){
  const {name, email, password, c_password} = req.query;
  const token = generateJWT({
    id: email
  })
  res.status(200).json({
    message: '註冊成功',
    data:{ 
      name,
      email,
      password,
      c_password,
      token
    }
  })
})

module.exports = router;
