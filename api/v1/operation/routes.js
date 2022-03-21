const express = require('express');
const OperationsService = require('./service');
const { validatorHandler } = require('../middlewares/validator.handler');
const {
  createOperationSchema,
  getOperationSchema,
  updateOperationSchema,
} = require('./schema');

const router = express.Router();
const service = new OperationsService();

router.get('/', async (req, res, next) => {
  try {
    const operations = await service.find();
    res.status(200).json({ operations });
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
      const operation = await service.findOne(id);
      res.status(200).json({ operation });
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
      const newOperation = await service.create(body);
      res.status(201).json({ newOperation });
    } catch (error) {
      next(error);
    }
  }
);
router.patch(
  '/:id',
  validatorHandler(getOperationSchema, 'params'),
  validatorHandler(updateOperationSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const operation = await service.update(id, body);
      res.status(200).json({ operation });
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
