const { hash } = require('bcrypt');
const { addCompany, checkCompanyEmail } = require('../../../db/queries');
const { companySchema } = require('../utils');

module.exports = async (req, res, next) => {
  try {
    const {
        name, email, password, location
    } = req.body;
    await companySchema.validateAsync({ 
        name, email, password, location
    });

    const data = await checkCompanyEmail(email);
    if (!data.rows[0]) {
      const hashedPassword = await hash(password, 10);
      const userData = await addCompany(name, email, hashedPassword, location);
      req.user = {
        id: userData.rows[0].id,
        role: 'company',
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
