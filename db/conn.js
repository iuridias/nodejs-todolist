const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'nodemvc',
  'root',
  'root',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

module.exports = sequelize;