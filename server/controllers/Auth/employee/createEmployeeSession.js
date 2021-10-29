const { sign } = require('jsonwebtoken');

const createEmployeeSession = (req, res) => {
  const token = sign(req.body, process.env.TOKEN_KEY, { expiresIn: '24h' });
  res
    .cookie('session', token, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true })
    .json({ Authentication: 'success' });
};
module.exports = createEmployeeSession;
