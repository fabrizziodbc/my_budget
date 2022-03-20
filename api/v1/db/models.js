const { User, UserSchema } = require('../user/model.js');

const setupModels = (sequelize) => {
  User.init(UserSchema, User.config(sequelize));
};

module.exports = setupModels;
