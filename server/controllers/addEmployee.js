const { hash } = require('bcrypt');
const { addEmployeeQuery, getEmployeeByEmail } = require('../db/queries');
const { signEmployeeUpSchema } = require('../utils');

module.exports = async (req, res, next) => {
  try {
    const {
      email, password, firstName, lastName, confirmPassword,
    } = req.body;
    await signEmployeeUpSchema.validateAsync({
      email, password, firstName, lastName, confirmPassword,
    });

    const data = await getEmployeeByEmail(email);
    if (!data.rows[0]) {
      const hashedPassword = await hash(password);
      const userData = await addEmployeeQuery(firstName, lastName, email, hashedPassword);
      req.body = {
        id: userData.rows[0].id,
        firstName: userData.rows[0].firstName,
        lastName: userData.rows[0].firstName,
        Name: userData.rows[0].firstName,
        profileImage: userData.rows[0].profile_img,
        role: 'employee',
      };
      next();
    } else {
      res.status(409).json({ Error: 'Email is already exists!' });
    }
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json({ Error: err.details[0].message });
    } else {
      next(err);
    }
  }
};
