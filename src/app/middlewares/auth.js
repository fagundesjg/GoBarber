module.exports = (req, res, next) => {
  if (req.session && req.session.user) {
    res.locals.user = req.session.user // locals é para o user ficar visivel em todo arquivo nunjuck
    return next()
  }

  return res.redirect('/')
}
