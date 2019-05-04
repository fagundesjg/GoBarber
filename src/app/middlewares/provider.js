module.exports = (req, res, next) => {
  if (req.session && req.session.user && req.session.user.provider === true) {
    console.log('É barbeiro!')
    return next()
  }
  console.log('Não é barbeiro!')
  return res.redirect('/')
}
