const express = require('express');
const router = express.Router();
const controlador = require('../controllers/detalleEncuestaController');

router.get('/', controlador.obtenerDetalles);
router.get('/:id', controlador.obtenerDetallePorId);
router.post('/', controlador.crearDetalle);
router.put('/:id', controlador.actualizarDetalle);
router.delete('/:id', controlador.eliminarDetalle);

module.exports = router; 