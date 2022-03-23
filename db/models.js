const { User, UserSchema } = require('../api/v1/user/model.js');
const { Operation, OperationSchema } = require('../api/v1/operation/model.js');
const { Balance, BalanceSchema } = require('../api/v1/balance/model.js');

const setupModels = (sequelize) => {
  User.init(UserSchema, User.config(sequelize));
  Balance.init(BalanceSchema, Balance.config(sequelize));
  Operation.init(OperationSchema, Operation.config(sequelize));

  User.associate(sequelize.models);
  Operation.associate(sequelize.models);
  Balance.associate(sequelize.models);
};

module.exports = setupModels;
