const { compare } = require('bcrypt');
const { checkEmployeeEmail } = require('../../../db/queries/employee');

const checkEmployeeAccount = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const checkEmailResult = await checkEmployeeEmail(email);
    if (checkEmailResult.rows[0]) {
      const data = checkEmailResult.rows[0];
      if (await compare(password, data.password)) {
        req.user = {
          id: data.id,
          role: 'employee',
        };
        next();
      } else {
        res.status(401).json({ message: 'Wrong Password' });
      }
    } else {
      res.status(401).json({ message: 'Wrong Email' });
    }
  } catch {
    res.status(500).json({ message: 'That authorization has been refused' });
  }
};

module.exports = checkEmployeeAccount;
