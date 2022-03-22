const Joi = require('joi');

const id = Joi.number().integer(); /* .uuid() */
const expenses = Joi.number();
const incomes = Joi.number();
const userId = Joi.number().integer();

const createOperationSchema = Joi.object({
  expenses: expenses.required(),
  incomes: incomes.required(),
  userId: userId.required(),
});

const getOperationSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createOperationSchema,
  getOperationSchema,
};
