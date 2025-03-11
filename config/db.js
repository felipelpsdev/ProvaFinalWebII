const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('universidade', 'usuario', 'senha', {
  host: 'localhost',
  dialect: 'mariadb',
});

module.exports = sequelize;