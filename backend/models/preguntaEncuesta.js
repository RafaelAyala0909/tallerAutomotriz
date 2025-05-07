const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const PreguntaEncuesta = sequelize.define('pregunta_encuesta', {
  id_pregunta: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  texto_pregunta: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  tipo_respuesta_id: {
    type: DataTypes.TINYINT(1),
    allowNull: false
  }
}, {
  tableName: 'pregunta_encuesta',
  timestamps: false
});

module.exports = PreguntaEncuesta; 