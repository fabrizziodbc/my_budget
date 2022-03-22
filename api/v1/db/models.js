const { User, UserSchema } = require('../user/model.js');
const { Operation, OperationSchema } = require('../operation/model.js');
const { Balance, BalanceSchema } = require('../balance/model.js');

const setupModels = (sequelize) => {
  User.init(UserSchema, User.config(sequelize));
  Balance.init(BalanceSchema, Balance.config(sequelize));
  Operation.init(OperationSchema, Operation.config(sequelize));

  User.associate(sequelize.models);
  Balance.associate(sequelize.models);
};

module.exports = setupModels;
