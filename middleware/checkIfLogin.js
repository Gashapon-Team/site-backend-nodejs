const jwt = require('jsonwebtoken');

const checkIfLogin = function(req, res, next) {
  const {token} = req.query;
  const { JWT_SECREAT } = process.env;
  const decode = null;
  console.log('middleare: checkIfLogin', token)

  try {
    let decode = jwt.verify(token, JWT_SECREAT)
    console.log('decode', decode)
    if(decode !== null) next()
  } catch (error) {
    if(error instanceof jwt.TokenExpiredError) { 
      console.error('JWT 令牌已過期')
    } else {
      console.log(error.message)
    }
    logFail(res, token, decode);
  }

}
const logFail = function(res, token, decode) {
  res.status(200).json({
    message: '登入失敗，請重新嘗試',
    token,
    decode
  })
}

module.exports = checkIfLogin;
