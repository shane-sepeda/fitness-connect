const withAuth = (req, res, next) => {
    if (!req.session.trainer_id) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;