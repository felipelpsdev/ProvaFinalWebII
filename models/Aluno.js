import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Aluno = sequelize.define('Aluno', {
  matricula: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true,
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  status: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
});

export default Aluno;