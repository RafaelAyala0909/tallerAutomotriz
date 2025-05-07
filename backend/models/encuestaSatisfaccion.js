const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const EncuestaSatisfaccion = sequelize.define('encuesta_satisfaccion', {
  id_encuesta: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  orden_trabajo_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cliente_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fecha_encuesta: {
    type: DataTypes.DATE,
    allowNull: false
  },
  calificacion_general: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  comentarios: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  id_estado: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'encuesta_satisfaccion',
  timestamps: false
});

module.exports = EncuestaSatisfaccion; 