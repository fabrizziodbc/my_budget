const Joi = require('joi');

const id = Joi.number().integer(); /* .uuid(); */
const concept = Joi.string();
const amount = Joi.number();
const type = Joi.string().valid('expense', 'income');
const date = Joi.date().max('now');
const balanceId = Joi.number().integer();

const createOperationSchema = Joi.object({
  concept: concept.required(),
  amount: amount.required(),
  type: type.required(),
  date: date.required(),
  balanceId: balanceId.required(),
});
const updateOperationSchema = Joi.object({
  concept: concept,
  amount: amount,
  date: date,
});
const getOperationSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createOperationSchema,
  getOperationSchema,
  updateOperationSchema,
};
