const joi = require('joi');
const { JoiPassword } = require('joi-password');

module.exports = joi.object({
  name: joi.string().required(),
  location: joi.string().required(),
  email: joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'co', 'gov', 'org', 'edu'] } })
    .lowercase()
    .required(),
  password: JoiPassword.string()
    .lowercase(1)
    .uppercase(1)
    .min(6)
    .max(25)
    .minOfSpecialCharacters(1)
    .required(),
  confirmPassword: joi.ref('password'),
});


