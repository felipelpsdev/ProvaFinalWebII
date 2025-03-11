import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Solicitacao = sequelize.define('Solicitacao', {
  data: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

export default Solicitacao;