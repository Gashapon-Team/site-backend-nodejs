const checkIfLogin = function(req, res, next) {
  if(false){
    next()
  } else {
    res.status(200).json({
      message: '登入失敗，請重新嘗試'
    })
  }
}

module.exports = checkIfLogin;
