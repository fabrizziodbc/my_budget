const Joi = require('joi');

const id = Joi.string().uuid();
const expenses = Joi.number();
const incomes = Joi.number();

const createOperationSchema = Joi.object({
  expenses: expenses.required(),
  incomes: incomes.required(),
});

const getOperationSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createOperationSchema,
  getOperationSchema,
};
