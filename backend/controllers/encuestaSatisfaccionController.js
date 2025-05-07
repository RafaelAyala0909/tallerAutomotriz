const EncuestaSatisfaccion = require('../models/encuestaSatisfaccion');

exports.obtenerEncuestas = async (req, res) => {
  try {
    const encuestas = await EncuestaSatisfaccion.findAll();
    res.json(encuestas);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener encuestas' });
  }
};

exports.obtenerEncuestaPorId = async (req, res) => {
  try {
    const encuesta = await EncuestaSatisfaccion.findByPk(req.params.id);
    if (!encuesta) return res.status(404).json({ error: 'Encuesta no encontrada' });
    res.json(encuesta);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener encuesta' });
  }
};

exports.crearEncuesta = async (req, res) => {
  try {
    const nueva = await EncuestaSatisfaccion.create(req.body);
    res.status(201).json(nueva);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear encuesta' });
  }
};

exports.actualizarEncuesta = async (req, res) => {
  try {
    const encuesta = await EncuestaSatisfaccion.findByPk(req.params.id);
    if (!encuesta) return res.status(404).json({ error: 'Encuesta no encontrada' });
    await encuesta.update(req.body);
    res.json(encuesta);
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar encuesta' });
  }
};

exports.eliminarEncuesta = async (req, res) => {
  try {
    const encuesta = await EncuestaSatisfaccion.findByPk(req.params.id);
    if (!encuesta) return res.status(404).json({ error: 'Encuesta no encontrada' });
    await encuesta.destroy();
    res.json({ mensaje: 'Encuesta eliminada correctamente' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar encuesta' });
  }
}; 