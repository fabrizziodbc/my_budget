const express = require('express');
const BalanceSheetsService = require('./service');
const { validatorHandler } = require('../../../middlewares/validator.handler');
const { createOperationSchema, getOperationSchema } = require('./schema');

const router = express.Router();
const service = new BalanceSheetsService();

router.get('/', async (req, res, next) => {
  try {
    const balanceSheets = await service.find();
    res.status(200).json({ balanceSheets });
  } catch (error) {
    next(error);
  }
});
router.get(
  '/:id',
  validatorHandler(getOperationSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const balanceSheet = await service.findOne(id);
      res.status(200).json({ balanceSheet });
    } catch (error) {
      next(error);
    }
  }
);
router.post(
  '/',
  validatorHandler(createOperationSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newBalanceSheet = await service.create(body);
      res.status(201).json({ newBalanceSheet });
    } catch (error) {
      next(error);
    }
  }
);
router.delete(
  '/:id',
  validatorHandler(getOperationSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(200).json({ id });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
