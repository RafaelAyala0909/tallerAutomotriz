const PreguntaEncuesta = require('../models/preguntaEncuesta');

exports.obtenerPreguntas = async (req, res) => {
  try {
    const preguntas = await PreguntaEncuesta.findAll();
    res.json(preguntas);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener preguntas' });
  }
};

exports.obtenerPreguntaPorId = async (req, res) => {
  try {
    const pregunta = await PreguntaEncuesta.findByPk(req.params.id);
    if (!pregunta) return res.status(404).json({ error: 'Pregunta no encontrada' });
    res.json(pregunta);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener pregunta' });
  }
};

exports.crearPregunta = async (req, res) => {
  try {
    const nueva = await PreguntaEncuesta.create(req.body);
    res.status(201).json(nueva);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear pregunta' });
  }
};

exports.actualizarPregunta = async (req, res) => {
  try {
    const pregunta = await PreguntaEncuesta.findByPk(req.params.id);
    if (!pregunta) return res.status(404).json({ error: 'Pregunta no encontrada' });
    await pregunta.update(req.body);
    res.json(pregunta);
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar pregunta' });
  }
};

exports.eliminarPregunta = async (req, res) => {
  try {
    const pregunta = await PreguntaEncuesta.findByPk(req.params.id);
    if (!pregunta) return res.status(404).json({ error: 'Pregunta no encontrada' });
    await pregunta.destroy();
    res.json({ mensaje: 'Pregunta eliminada correctamente' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar pregunta' });
  }
}; 