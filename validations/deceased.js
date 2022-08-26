const Joi = require('joi');

exports.create = Joi.object({
  name: Joi.string().required(),
  bio: Joi.string().required(),
  images: Joi.array().items(Joi.string()).required(),
});
