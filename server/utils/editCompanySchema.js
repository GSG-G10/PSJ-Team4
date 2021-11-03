const joi = require('joi');

module.exports = joi.object({
  startWorkTime: joi.string().required(),
  endWorkTime: joi.string().required(),
  location: joi.string().required(),
  profileImage: joi.string().required(),
  name: joi.string().required(),
  email: joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'co', 'gov', 'org', 'edu'] } })
    .lowercase()
    .required(),
});
