const checkIfLogin = function(req, res, next) {
  res.send('驗證登入')
  res.next()
}

module.exports = checkIfLogin;
