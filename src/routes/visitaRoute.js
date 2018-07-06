const express = require('express');
const router = express.Router();
const controller = require('../controllers/visitaControler')

//router.get('/baixa-visita-dimep', controller.get);
//router.post('/baixa-visita-dimep', controller.post);

router.get('/novo-visitante', controller.get);
router.post('/novo-visitante', controller.post);

module.exports = router;