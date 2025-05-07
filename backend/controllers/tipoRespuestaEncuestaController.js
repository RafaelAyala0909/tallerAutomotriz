const TipoRespuestaEncuesta = require('../models/tipoRespuestaEncuesta');

exports.obtenerTiposRespuesta = async (req, res) => {
  try {
    const tipos = await TipoRespuestaEncuesta.findAll();
    res.json(tipos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener tipos de respuesta' });
  }
};

exports.obtenerTipoRespuestaPorId = async (req, res) => {
  try {
    const tipo = await TipoRespuestaEncuesta.findByPk(req.params.id);
    if (!tipo) return res.status(404).json({ error: 'Tipo de respuesta no encontrado' });
    res.json(tipo);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener tipo de respuesta' });
  }
};

exports.crearTipoRespuesta = async (req, res) => {
  try {
    const nuevo = await TipoRespuestaEncuesta.create(req.body);
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear tipo de respuesta' });
  }
};

exports.actualizarTipoRespuesta = async (req, res) => {
  try {
    const tipo = await TipoRespuestaEncuesta.findByPk(req.params.id);
    if (!tipo) return res.status(404).json({ error: 'Tipo de respuesta no encontrado' });
    await tipo.update(req.body);
    res.json(tipo);
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar tipo de respuesta' });
  }
};

exports.eliminarTipoRespuesta = async (req, res) => {
  try {
    const tipo = await TipoRespuestaEncuesta.findByPk(req.params.id);
    if (!tipo) return res.status(404).json({ error: 'Tipo de respuesta no encontrado' });
    await tipo.destroy();
    res.json({ mensaje: 'Tipo de respuesta eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar tipo de respuesta' });
  }
}; 