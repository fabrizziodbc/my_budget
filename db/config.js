const { config } = require('../config/config');

module.exports = {
  development: {
    url: config.dbUrl,
    dialet: 'postgres',
  },
  production: {
    url: config.dbUrl,
    dialet: 'postgres',
    ssl: {
      rejectUnauthorized: false,
    },
  },
};
