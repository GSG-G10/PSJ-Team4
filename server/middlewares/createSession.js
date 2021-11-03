const { sign } = require('jsonwebtoken');

const createSession = (req, res) => {
  const token = sign(req.user, process.env.TOKEN_KEY, { expiresIn: '24h' });
  res
    .cookie('session', token, { maxAge: 24 * 60 * 60 * 1000 })
    .json({ Authentication: 'success' });
};

module.exports = createSession;
