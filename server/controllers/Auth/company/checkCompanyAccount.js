const { compare } = require('bcrypt');
const { checkCompanyEmail } = require('../../../db/queries/company');

const checkCompanyAccount = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const checkEmailResult = await checkCompanyEmail(email);
    if (checkEmailResult.rows[0]) {
      const data = checkEmailResult.rows[0];
      if (await compare(password, data.password)) {
        req.body = {
          id: data.id,
          name: data.name,
          profileImage: data.profile_img,
          role: 'company',
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

module.exports = checkCompanyAccount;
