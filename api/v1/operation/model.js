const { Model, DataTypes } = require('sequelize');

const OPERATION_TABLE = 'operations';

const OperationSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  concept: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  amount: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  type: {
    allowNull: false,
    type: DataTypes.ENUM('expense', 'income'),
  },
  date: {
    allowNull: false,
    type: DataTypes.DATE,
  },
};

class Operation extends Model {
  static associate() {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: OPERATION_TABLE,
      modelName: 'Operation',
      timestamps: false,
    };
  }
}

module.exports = { OPERATION_TABLE, OperationSchema, Operation };
