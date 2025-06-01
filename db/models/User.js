const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('User', { // USER= una tabla
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  identification: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM('ADMIN', 'USER'), // ENUM = solo puede ser uno de los valores
    defaultValue: 'USER',
    allowNull: false
  },
  is_active:{
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    allowNull: false
  }
}, { // todos los modelos deben tener esto:
  tableName: 'users',
  timestamps: true,           // activa createdAt y updatedAt automáticos
  createdAt: 'created_at',    // cambia el nombre del campo
  updatedAt: 'updated_at'
});

module.exports = User;