const express = require('express');
const router = express.Router();
const controlador = require('../controllers/tipoRespuestaEncuestaController');

router.get('/', controlador.obtenerTiposRespuesta);
router.get('/:id', controlador.obtenerTipoRespuestaPorId);
router.post('/', controlador.crearTipoRespuesta);
router.put('/:id', controlador.actualizarTipoRespuesta);
router.delete('/:id', controlador.eliminarTipoRespuesta);

module.exports = router; 