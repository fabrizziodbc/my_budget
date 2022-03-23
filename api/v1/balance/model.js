const { Model, DataTypes, Sequelize } = require('sequelize');
const { USER_TABLE } = require('../user/model');

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
  userId: {
    allowNull: false,
    field: 'user_id',
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: 'id',
    },
    unique: true,
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
};

class Balance extends Model {
  static associate(models) {
    this.belongsTo(models.User, { as: 'user' });
    this.hasMany(models.Operation, {
      as: 'operation',
      foreignKey: 'balanceId',
    });
  }
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
