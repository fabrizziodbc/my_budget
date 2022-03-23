const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
class BalanceSheetsService {
  constructor() {}
  async create(data) {
    const newBalanceSheet = await models.Balance.create(data);
    return newBalanceSheet;
  }
  async find() {
    const balanceSheets = await models.Balance.findAll({ include: ['user'] });
    return balanceSheets;
  }
  async findOne(id) {
    const balanceSheet = await models.Balance.findByPk(id, {
      include: ['operation'],
    });
    if (!balanceSheet) {
      throw boom.notFound('Balance Sheet not found');
    }
    return balanceSheet;
  }
  async delete(id) {
    const balanceSheet = await this.findOne(id);
    await balanceSheet.destroy();
    return { id };
  }
}
module.exports = BalanceSheetsService;
