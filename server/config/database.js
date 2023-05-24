// require('dotenv').config();

// console.log(process.env.DB_FILE);

module.exports = {
  development: {
    storage: 'db/dev.db',
    dialect: "sqlite",
    seederStorage: "sequelize",
    benchmark: true,
    logQueryParameters: true,
    typeValidation: true,
    // logging: false
  },
  test: {
    storage: 'test/test.db',
    dialect: "sqlite",
    seederStorage: "sequelize",
    // logging: false
  }
};
