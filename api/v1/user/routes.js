const express = require('express');
const UsersService = require('./service');
const { validatorHandler } = require('../middlewares/validator.handler');
const {
  createUserSchema,
  getUserSchema,
  updateUserSchema,
} = require('./schema');

const router = express.Router();
const service = new UsersService();

router.get('/', async (req, res, next) => {
  try {
    const users = await service.find();
    res.status(200).json({ users });
  } catch (error) {
    next(error);
  }
});
router.get(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await service.findOne(id);
      res.status(200).json({ user });
    } catch (error) {
      next(error);
    }
  }
);
router.post(
  '/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newUser = await service.create(body);
      res.status(201).json({ newUser });
    } catch (error) {
      next(error);
    }
  }
);
router.patch(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const user = await service.update(id, body);
      res.status(200).json({ user });
    } catch (error) {
      next(error);
    }
  }
);
router.delete(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
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
