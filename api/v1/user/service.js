const boom = require('@hapi/boom');
const { models } = require('../../../libs/sequelize');
const bcrypt = require('bcrypt');

class UsersService {
  constructor() {}
  async create(data) {
    const hash = await bcrypt.hash(data.password, 10);
    const newUser = await models.User.create(
      { ...data, password: hash },
      { include: ['balance'] }
    );
    delete newUser.dataValues.password;
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
    delete user.dataValues.password;
    return user;
  }
  async findByEmail(email) {
    const user = await models.User.findOne({
      where: { email },
      include: ['balance'],
    });
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
