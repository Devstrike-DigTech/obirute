const Joi = require('joi');

exports.login = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});
