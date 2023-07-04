const checkIfLogin = function(req, res, next) {
  res.send('驗證登入')
  req.next()
}

module.exports = checkIfLogin;
