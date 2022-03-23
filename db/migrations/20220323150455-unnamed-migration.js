'use strict';
const { USER_TABLE, UserSchema } = require('../../api/v1/user/model');
const { BALANCE_TABLE, BalanceSchema } = require('../../api/v1/balance/model');
const {
  OPERATION_TABLE,
  OperationSchema,
} = require('../../api/v1/operation/model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(BALANCE_TABLE, BalanceSchema);
    await queryInterface.createTable(OPERATION_TABLE, OperationSchema);
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface) {
    await queryInterface.dropTable(OPERATION_TABLE);
    await queryInterface.dropTable(BALANCE_TABLE);
    await queryInterface.dropTable(USER_TABLE);
  },
};
