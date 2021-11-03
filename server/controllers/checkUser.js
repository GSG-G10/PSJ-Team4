const { verify } = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  try {
    const { session } = req.cookies;
    if (!session) {
      res.json({ data: { role: 'user' } });
    } else {
      verify(session, process.env.TOKEN_KEY, (err, decoded) => {
        if (err) {
          res
            .clearCookie('session')
            .status(401)
            .json({ status: 401, msg: 'you are not authorized' });
        } else {
          res.json({ data: decoded });
        }
      });
    }
  } catch (err) {
    next(err);
  }
};
