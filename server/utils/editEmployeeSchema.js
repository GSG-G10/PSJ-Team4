const joi = require('joi');

module.exports = joi.object({
  contact: joi.string().length(10).pattern(/^[0-9]+$/).required(),
  address: joi.string().required(),
  birthDate: joi.number().integer().required(),
  status: joi.string().required(),
  profileImage: joi.string().required(),
  coverImage: joi.string().required(),
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  email: joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'co', 'gov', 'org', 'edu'] } })
    .lowercase()
    .required(),
});
