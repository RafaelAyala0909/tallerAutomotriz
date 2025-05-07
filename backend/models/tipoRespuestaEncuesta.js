const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TipoRespuestaEncuesta = sequelize.define('tipo_respuesta_encuesta', {
  id_tipo_respuesta: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre_tipo: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING(50),
    allowNull: true
  }
}, {
  tableName: 'tipo_respuesta_encuesta',
  timestamps: false
});

module.exports = TipoRespuestaEncuesta; 