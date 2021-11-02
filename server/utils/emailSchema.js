const Joi = require('joi');

const emailSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'co', 'gov', 'org', 'edu'] } }).lowercase().required(),
});

module.exports = emailSchema;
