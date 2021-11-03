const { verify } = require('jsonwebtoken');

const checkAuth = (req, res, next) => {
  const { session } = req.cookies;

  verify(session, process.env.TOKEN_KEY, (err, decoded) => {
    if (err) {
      res
        .clearCookie('session')
        .status(401)
        .json({ status: 401, msg: 'you are not authorized' });
    } else {
      if (decoded.role === 'employee') { req.employeeId = decoded.id; } else { req.companyId = decoded.id; }
      next();
    }
  });
};

module.exports = checkAuth;
