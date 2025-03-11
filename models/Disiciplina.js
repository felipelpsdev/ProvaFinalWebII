const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Disciplina = sequelize.define('Disciplina', {
  descricao: {
    type: DataTypes.STRING(1000),
    allowNull: false,
  },
  status: {
    type: DataTypes.INTEGER,
    defaultValue: 1, // 1 = ativa, 0 = inativa
  },
});

module.exports = Disciplina;