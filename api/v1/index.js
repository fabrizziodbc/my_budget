/* eslint-disable linebreak-style */
const express = require('express');

const userRouter = require('./user/routes');
const authRouter = require('./auth/routes');
const balanceRouter = require('./balance/routes');
const operationRouter = require('./operation/routes');

const router = express.Router();

router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/balance', balanceRouter);
router.use('/operation', operationRouter);

module.exports = router;
