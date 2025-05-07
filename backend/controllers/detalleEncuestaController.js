const DetalleEncuesta = require('../models/detalleEncuesta');

exports.obtenerDetalles = async (req, res) => {
  try {
    const detalles = await DetalleEncuesta.findAll();
    res.json(detalles);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener detalles' });
  }
};

exports.obtenerDetallePorId = async (req, res) => {
  try {
    const detalle = await DetalleEncuesta.findByPk(req.params.id);
    if (!detalle) return res.status(404).json({ error: 'Detalle no encontrado' });
    res.json(detalle);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener detalle' });
  }
};

exports.crearDetalle = async (req, res) => {
  try {
    const nuevo = await DetalleEncuesta.create(req.body);
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear detalle' });
  }
};

exports.actualizarDetalle = async (req, res) => {
  try {
    const detalle = await DetalleEncuesta.findByPk(req.params.id);
    if (!detalle) return res.status(404).json({ error: 'Detalle no encontrado' });
    await detalle.update(req.body);
    res.json(detalle);
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar detalle' });
  }
};

exports.eliminarDetalle = async (req, res) => {
  try {
    const detalle = await DetalleEncuesta.findByPk(req.params.id);
    if (!detalle) return res.status(404).json({ error: 'Detalle no encontrado' });
    await detalle.destroy();
    res.json({ mensaje: 'Detalle eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar detalle' });
  }
}; 