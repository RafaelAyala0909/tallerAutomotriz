const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const DetalleEncuesta = sequelize.define('detalle_encuesta', {
  id_detalle_encuesta: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  encuesta_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  pregunta_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  respuesta: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  calificacion: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  tableName: 'detalle_encuesta',
  timestamps: false
});

module.exports = DetalleEncuesta; 