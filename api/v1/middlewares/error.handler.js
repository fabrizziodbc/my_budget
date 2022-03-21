/* eslint-disable no-unused-vars */
const { ValidationError } = require('sequelize');
const boom = require('@hapi/boom');

const logErrors = (err, req, res, next) => {
  console.log(err);
  next(err);
};

const errorHandler = (err, req, res, next) => {
  res.status(500).json({ mssg: err.message, stack: err.stack });
};

const boomErrorHandler = (err, req, res, next) => {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
};
const ormErrorHandler = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    const statusCode = 409;
    res
      .status(statusCode)
      .json({ statusCode: statusCode, message: err.name, errors: err.errors });
  }
  next(err);
};

module.exports = { logErrors, boomErrorHandler, errorHandler,ormErrorHandler };
