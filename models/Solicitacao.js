const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Solicitacao = sequelize.define('Solicitacao', {
  data: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.INTEGER,
    defaultValue: 0, // 0 = pendente, 1 = aprovada, 2 = rejeitada
  },
});

module.exports = Solicitacao;