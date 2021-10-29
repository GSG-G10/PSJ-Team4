const { compare } = require('bcrypt');
const { checkEmployeeEmail } = require('../../../db/queries/employee');

const checkEmployeeAccount = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const checkEmailResult = await checkEmployeeEmail(email);
    if (checkEmailResult.rows[0]) {
      const data = checkEmailResult.rows[0];
      if (await compare(password, data.password)) {
        req.body = {
          id: data.id,
          firstName: data.first_name,
          lastName: data.last_name,
          profileImage: data.profile_img,
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
    res.status(401).json({ message: 'That authorization has been refused' });
  }
};

module.exports = checkEmployeeAccount;
