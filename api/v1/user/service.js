const boom = require('@hapi/boom');

class UsersService {
  constructor() {
    this.users = [{ name: 'Juan' }, { name: 'Pedro' }];
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
