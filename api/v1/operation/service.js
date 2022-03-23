const boom = require('@hapi/boom');
const { models } = require('../../../libs/sequelize');
class OperationsService {
  constructor() {}
  async create(data) {
    const balance = await models.Balance.findByPk(data.balanceId);
    const newOperation = await models.Operation.create(data);
    await this.balanceUpdate(data, balance);
    return newOperation;
  }
  async find() {
    const operations = await models.Operation.findAll();
    return operations;
  }
  async findOne(id) {
    const operation = await models.Operation.findByPk(id);
    if (!operation) {
      throw boom.notFound('Operation not found');
    }
    return operation;
  }
  async findByBalance(balanceId) {
    const balance = await models.Balance.findByPk(balanceId);
    if (!balance) {
      throw boom.notFound('Balance not found');
    }

    const operationCount = await models.Operation.count({
      where: {
        balanceId: balanceId,
      },
    });
    const limit = 10;
    let operations = [];
    if (operationCount > limit) {
      operations = await models.Operation.findAll({
        where: {
          balanceId: balanceId,
        },
        limit,
        offset: operationCount - limit,
      });
    } else {
      operations = await models.Operation.findAll({
        where: {
          balanceId: balanceId,
        },
      });
    }

    return operations.reverse();
  }
  async update(id, data) {
    const operation = await this.findOne(id);
    const operationData = await operation.update(data);
    return operationData;
  }
  async delete(id) {
    const operation = await this.findOne(id);
    await operation.destroy();
    return { id };
  }
  async balanceUpdate(data, balance) {
    if (data.type === 'income') {
      return await balance.update({ incomes: balance.incomes + data.amount });
    }
    if (data.type === 'expense') {
      return await balance.update({ expenses: balance.expenses + data.amount });
    }
  }
}
module.exports = OperationsService;
