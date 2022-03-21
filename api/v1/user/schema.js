const Joi = require('joi');

const id = Joi.string();
const name = Joi.string().min(2);
const email = Joi.string().min(2).email();
const password = Joi.string();

const createUserSchema = Joi.object({
  name: name.required(),
  email: email.required(),
  password: password.required(),
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
