const express = require('express');
const router = express.Router();
const controlador = require('../controllers/encuestaSatisfaccionController');

router.get('/', controlador.obtenerEncuestas);
router.get('/:id', controlador.obtenerEncuestaPorId);
router.post('/', controlador.crearEncuesta);
router.put('/:id', controlador.actualizarEncuesta);
router.delete('/:id', controlador.eliminarEncuesta);

module.exports = router; 