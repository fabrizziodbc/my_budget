const boom = require('@hapi/boom');
const sequelize = require('../libs/sequelize');

class UsersService {
  constructor() {
    this.users = [];
  }
  create() {}
  async find() {
    return this.users;
  }
  async findOne() {
    throw boom.notFound('User not found');
  }
  async update() {}
  async delete() {}
}
module.exports = UsersService;
