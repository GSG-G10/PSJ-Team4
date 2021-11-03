const joi = require('joi');

module.exports = joi.object({
  isAnonymous: joi.boolean().required(),
  reviewContent: joi.string().required(),
  rate: joi
    .number()
    .integer()
    .min(0)
    .max(5)
    .optional(),
});
