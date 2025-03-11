import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Disciplina = sequelize.define('Disciplina', {
  descricao: {
    type: DataTypes.STRING(1000),
    allowNull: false,
  },
  status: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
});

export default Disciplina;