const { Model, DataTypes, Sequelize } = require('sequelize');

const BALANCE_TABLE = 'balanceSheets';

const BalanceSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  expenses: {
    allowNull: false,
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  incomes: {
    allowNull: false,
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
};

class Balance extends Model {
  static associate() {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: BALANCE_TABLE,
      modelName: 'Balance',
      timestamps: false,
    };
  }
}

module.exports = { BALANCE_TABLE, BalanceSchema, Balance };
