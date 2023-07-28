const Sequelize = require('sequelize');

const sequelize = new Sequelize('users', 'root', '2112', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
