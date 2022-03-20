const { User, UserSchema } = require('../user/model.js');
const { Operation, OperationSchema } = require('../operation/model.js');

const setupModels = (sequelize) => {
  User.init(UserSchema, User.config(sequelize));
  Operation.init(OperationSchema, Operation.config(sequelize));
};

module.exports = setupModels;
