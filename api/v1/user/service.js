const boom = require('@hapi/boom');
const { models } = require('../../../libs/sequelize');

class UsersService {
  constructor() {}
  async create(data) {
    const newUser = await models.User.create(data, { include: ['balance'] });
    return newUser;
  }
  async find() {
    const users = await models.User.findAll({ include: ['balance'] });
    return users;
  }
  async findOne(id) {
    const user = await models.User.findByPk(id, { include: ['balance'] });
    if (!user) {
      throw boom.notFound('User not found');
    }
    return user;
  }
  async update(id, data) {
    const user = await this.findOne(id);
    const userData = await user.update(data);
    return userData;
  }
  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}
module.exports = UsersService;
