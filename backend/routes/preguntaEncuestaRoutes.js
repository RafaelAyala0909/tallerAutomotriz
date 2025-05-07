const express = require('express');
const router = express.Router();
const controlador = require('../controllers/preguntaEncuestaController');

router.get('/', controlador.obtenerPreguntas);
router.get('/:id', controlador.obtenerPreguntaPorId);
router.post('/', controlador.crearPregunta);
router.put('/:id', controlador.actualizarPregunta);
router.delete('/:id', controlador.eliminarPregunta);

module.exports = router; 