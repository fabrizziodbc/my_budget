'use strict';
const {
  OPERATION_TABLE,
  OperationSchema,
} = require('../../api/v1/operation/model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.addColumn(
      OPERATION_TABLE,
      'balance_id',
      OperationSchema.balanceId
    );
  },

  async down(queryInterface) {
    await queryInterface.removeColumn(OPERATION_TABLE, 'balance_id');
  },
};
