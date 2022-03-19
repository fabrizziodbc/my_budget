const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(2);
const email = Joi.string().min(2).email();

const createUserSchema = Joi.object({
  name: name.required(),
  email: email.required(),
});
const updateUserSchema = Joi.object({
  id: id,
  name: name,
  email: email,
});
const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, getUserSchema, updateUserSchema };
