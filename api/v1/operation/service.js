const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
class OperationsService {
  constructor() {}
  async create(data) {
    const newOperation = await models.Operation.create(data);
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
}
module.exports = OperationsService;
