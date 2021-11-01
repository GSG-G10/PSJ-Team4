const Joi = require('joi');
const { JoiPassword } = require('joi-password');

const loginSchema = Joi.object({
  password: JoiPassword.string()
    .lowercase(1)
    .uppercase(1)
    .min(6)
    .max(25)
    .minOfSpecialCharacters(1)
    .required(),

  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'co', 'gov', 'org', 'edu'] } }).lowercase().required(),
});

module.exports = { loginSchema };
