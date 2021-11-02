const { loginSchema } = require('../utils/loginSchema');

const loginValidation = async (req, res, next) => {
  try {
    await loginSchema.validateAsync(req.body);
    next();
  } catch (error) {
    if (error.isJoi === true) res.status(422).json({ message: error.message });
  }
};
module.exports = loginValidation;
